FROM node:20
EXPOSE 3000

WORKDIR /usr/app

COPY  ./dist /usr/app/
COPY ./node_modules /usr/app/node_modules/

CMD ["node", "main.js"]

#docker run -p 3000:3000 <image>
