FROM node:9.11

WORKDIR /usr/app

COPY . .

RUN npm install && npx tsc && ls dist