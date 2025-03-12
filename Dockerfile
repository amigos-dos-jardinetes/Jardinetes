# Usa a versão mais recente, caso não seja especificada
ARG NODE_VERSION=latest

# Usa a imagem leve do Node.js
FROM node:${NODE_VERSION}

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos essenciais primeiro
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install --legacy-peer-deps --omit=dev

# Copia o restante dos arquivos da aplicação
COPY . .

# Exporte a versão web explicitamente para o diretório "web-build"
RUN npx expo export:web

# Instala o servidor estático 'serve'
RUN npm install -g serve

# Exponha a porta usada pelo servidor
EXPOSE 8081

# Comando para iniciar o servidor estático a partir da pasta "web-build"
CMD ["serve", "-s", "web-build", "-l", "8081"]
