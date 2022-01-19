FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production --silent && mv node_modules ../

COPY . .

EXPOSE 3000

CMD npm start