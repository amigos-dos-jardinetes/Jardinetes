#!/bin/bash
# Carrega a imagem no ECR
# A imagem preferencial usada no ECS será aquela com tag latest

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

export ECR_REPO=${ECR_REPO_BASE}
ECR_REPO_URI=${ECR_URI}/${ECR_REPO}
TAGS="node-${NODE_VERSION} latest"

# algumas variáveis de ambiente precisam ser passados ao compose
export NODE_VERSION
docker compose -p ${PROJECT} build

# aplica os tags à imagem
for t in $TAGS; do
    docker tag ${ECR_REPO}:node-${NODE_VERSION} ${ECR_REPO_URI}:${t}
done

# autentica no ECR e faz o upload da imagem
docker push --all-tags ${ECR_REPO_URI}
