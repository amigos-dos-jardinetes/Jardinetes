# Obtém as credenciais temporárias e assume a função que permite
# executar chamadas às APIs da AWS
# Parâmetros:
#   $1: ARN da função (role) a ser assumida
#   $2: Nome do usuário federado
#   $3: ID Token do provedor de identidade
get_aws_access_key() {
    local role_arn=$1
    local username=$2
    local id_token=$3

    aws sts assume-role-with-web-identity \
        --role-arn "${role_arn}" \
        --role-session-name "${username}" \
        --web-identity-token "${id_token}"
}

# Obtem um novo token a partir do refresh token
# Parâmetros:
#   $1: ID do client OIDC
#   $2: Escopo(s) da resposta do provedor OIDC
#   $3: URL para obtenção de token de identidade OIDC
#   $4: Refresh token do provedor de identidade
refresh_token() {
    local client_id=$1
    local oidc_scope=$2
    local oidc_token_endpoint=$3
    local refresh_token=$4

    curl -s \
        -d "client_id=${client_id}" \
        -d "scope=${oidc_scope}" \
        -d "grant_type=refresh_token" \
        -d "refresh_token=${refresh_token}" \
        -H "Content-Type: application/x-www-form-urlencoded" \
        -X POST "${oidc_token_endpoint}"
}

# Obtém o token do provedor de identidade
# O token precisa conter o id_token o que exige o escopo openid
# Ver: https://stackoverflow.com/questions/73334996/personal-access-tokens-with-keycloak
# Parâmetros:
#   $1: ID do cliente OIDC
#   $2: Escopo(s) da resposta do provedor OIDC
#   $3: Nome do usuário federado
#   $4: Senha do usuário federado
#   $5: URL para obtenção de token OIDC
get_oidc_token() {
    local client_id=$1
    local oidc_scope=$2
    local username=$3
    local password=$4
    local oidc_token_endpoint=$5

    curl -s \
        -d "client_id=${client_id}" \
        -d "scope=${oidc_scope}" \
        -d "username=${username}" \
        --data-urlencode "password=${password}" \
        -d "grant_type=password" \
        -H "Content-Type: application/x-www-form-urlencoded" \
        -X POST "${oidc_token_endpoint}"
}


# Extrai o access token
# Parâmetros:
#   $1: O token OIDC do usuário logado
#   $2: O nome do valor a ser extraído
get_oidc_value() {
    local oidc_token=$1
    local token_value_name=$2

    jq -r ."${token_value_name}" <<< ${oidc_token}
}

# Extrai o ID token
# Parâmetros:
#   $1: O token OIDC do usuário logado
get_oidc_id_token() {
    local oidc_token=$1

    get_oidc_value "${oidc_token}" "id_token"
}

# Extrai o acess token
# Parâmetros:
#   $1: O token OIDC do usuário logado
get_oidc_access_token() {
    local oidc_token=$1

    get_oidc_value "${oidc_token}" "access_token"
}

# Extrai o refresh token
# Parâmetros:
#   $1: O token OIDC do usuário logado
get_oidc_refresh_token() {
    local oidc_token=$1

    get_oidc_value "${oidc_token}" "refresh_token"
}

# Encerra a sessão com o provedor de identidade OIDC
# Parâmetros:
#   $1: ID do cliente OIDC
#   $2: ID token do usuário
#   $3: URL para de logout OIDC
oidc_logout() {
    local client_id=$1
    local id_token=$2
    local oidc_logout_endpoint=$3

    curl -s \
        -d "client_id=${client_id}" \
        -d "id_token_hint=${id_token}" \
        -H "Content-Type: application/x-www-form-urlencoded" \
        -X POST "${oidc_logout_endpoint}"
}
