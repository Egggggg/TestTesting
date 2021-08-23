FROM node:16

EXPOSE 443
COPY . .
RUN npm install
CMD ["node", "./index.js"]