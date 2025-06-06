FROM node:18-alpine

# Instala dependências SSL
RUN apk add --no-cache openssl ca-certificates

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 5000

CMD ["sh", "-c", "npx prisma migrate deploy && node src/server.js"]