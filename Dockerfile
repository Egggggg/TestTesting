FROM node:16

EXPOSE 443

WORKDIR /usr/src
COPY . /usr/src
RUN npm install

CMD ["node", "./index.js"]