    #!/bin/bash
# Carrega o site estático no S3

PROJECT=$1

if [ -z ${PROJECT} ]; then
    echo "Uso: deploy.sh <nome_do_projeto>"
    echo "Erro: Nome do projeto não informado"
    exit 1
fi

PROJECT_ENV=env/${PROJECT}.env

if [ ! -r ${PROJECT_ENV} ]; then
    echo "Erro: Arquivo ${PROJECT_ENV} não existe ou não é legível"
    exit 2
fi

source .env
source ${PROJECT_ENV}

# algumas variáveis de ambiente precisam ser passadas ao compose
export NODE_VERSION
docker compose -p ${PROJECT} build

# executa o contêiner e copia os arquivos para o bucket S3
docker compose up -d
rm -rf ./dist
docker cp jardinetes-ct:/app/web-build ./dist
docker compose down
aws s3 rm s3://${S3_BUCKET} --recursive
aws s3 cp ./dist/ s3://${S3_BUCKET}/ --recursive
