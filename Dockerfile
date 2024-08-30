FROM node:20

WORKDIR /usr/app

COPY  ./dist /usr/app/

CMD ["node", "main.js"]
