#!/bin/bash
# Obtém credenciais temporárias para um usuário federado.
# Gera uma sequência de comandos export para as variáveis de ambiente
# usadas por padrão pelas APIs da AWS.
#
# Variáveis de ambiente
#   UTFPR_USERNAME: nome de usuário federado
#   UTFPR_PASSWORD: senha do usuário federado
#   UTFPR_REFRESH_TOKEN: token que permite obter novas credenciais
#                        sem reautenticar (quando disponível)
#   OIDC_SCOPE: escopos a serem usados para obteção do token OIDC
# Para usar estas variáveis em um terminal interativo ou script:
#   $ eval $(./aws-idp-auth.sh)
# Autor: Wilson Horstmeyer Bogado <wilson@utfpr.edu.br>

# Para executar este script são necessários alguns programas auxiliares:
#   - curl
#   - jq
#
# Por exemplo para Ubuntu/Debian:
#   sudo apt -y install curl jq
# A maioria das distribuições já vem com curl instalado
#
# Também é necessário instalar o AWS CLI:
#   https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

# Define funções de suporte
source  ~/.utfpr/aws-idp-auth.inc

# Variáveis de ambiente contendo parâmetros para este script
CONFFILE=~/.utfpr/aws-idp-auth.conf
if [ ! -r ${CONFFILE} ]; then
    echo "Arquivo de configuração ${CONFFILE} não existe ou não é legível"
    exit 1
fi

source ${CONFFILE}

# Caso não seja informado, usa o nome de usuário logado
USERNAME=${1:-${UTFPR_USERNAME:-$USER}}

# Obtém a senha do usuário para autenticação via OIDC
# Tenta usar o valor da variável UTFPR_PASSWORD,
# caso não esteja definida obtém interativamente
PASSWORD=${UTFPR_PASSWORD}
if [ -z "${PASSWORD}" ]; then
    read -p "[${USERNAME}] Senha: " -s PASSWORD
    echo
fi

# Obtém o token do provedor de identidade
# O token precisa conter o id_token o que exige o escopo openid
# O escopo offline_access faz com que o refresh token seja incluído na resposta
# Ver: https://stackoverflow.com/questions/73334996/personal-access-tokens-with-keycloak
OIDC_TOKEN=$(get_oidc_token \
    "${CLIENT_ID}" \
    "${OIDC_SCOPE}" \
    "${USERNAME}" \
    "${PASSWORD}" \
    "${OIDC_TOKEN_ENDPOINT}" \
)

if [ -n "${DEBUG}" ]; then
    jq <<< ${OIDC_TOKEN}
fi

# Extrai o token usado nas chamadas às APIs da AWS
# Aborta em caso de usuário e/ou senha incorretos
ID_TOKEN=$(get_oidc_id_token "${OIDC_TOKEN}")
if [ "$ID_TOKEN" == "null" ]; then
    jq <<< ${OIDC_TOKEN}
    exit 2
fi

# Extrai o refresh token necessário para gerar um novo token
# caso o inicial expire
REFRESH_TOKEN=$(get_oidc_refresh_token "${OIDC_TOKEN}")
if [ "${REFRESH_TOKEN}" == "null" ]; then
    jq <<< ${OIDC_TOKEN}
    exit 3
fi

# Obtém as credenciais temporárias e assume a função que permite
# executar chamadas às APIs da AWS
AWS_CREDS=$(get_aws_access_key "${ROLE_ARN}" "${USERNAME}" "${ID_TOKEN}")

if [ -z "${AWS_CREDS}" ]; then
    echo "Não foi possível obter credenciais temporárias"
    exit 4
fi

# Gera comandos export na saída padrao
# Para injetar as variáveis em um terminal interativo ou script, p. ex.:
#   eval $(./aws-idp-auth.sh)
cat > /dev/stdout <<EOF
export AWS_ACCESS_KEY_ID=$(jq -r .Credentials.AccessKeyId <<< $AWS_CREDS)
export AWS_SECRET_ACCESS_KEY=$(jq -r .Credentials.SecretAccessKey <<< $AWS_CREDS)
export AWS_SESSION_TOKEN=$(jq -r .Credentials.SessionToken <<< $AWS_CREDS)
export AWS_DEFAULT_REGION=${AWS_DEFAULT_REGION}
export OIDC_ID_TOKEN=${ID_TOKEN}
export OIDC_REFRESH_TOKEN=${REFRESH_TOKEN}
EOF
