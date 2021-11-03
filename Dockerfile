FROM node:14-bullseye
COPY . .
RUN npm i

CMD ["node", "server.js"]