FROM node:16

EXPOSE 443

WORKDIR /usr/src
COPY . /usr/src
RUN npm install

RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.5/dumb-init_1.2.5_x86_64
RUN chmod +x /usr/local/bin/dumb-init

CMD ["dumb-init", "node", "./index.js"]