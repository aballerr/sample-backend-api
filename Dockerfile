FROM public.ecr.aws/bitnami/node:14.20.0

WORKDIR /usr/src/app

RUN npm install -g yarn

RUN npm i -g nodemon

COPY . .

RUN rm -rf node_modules

RUN yarn

EXPOSE 5001

EXPOSE 27017

EXPOSE 17677

EXPOSE 5432

CMD [ "yarn", "start" ]