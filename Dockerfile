FROM node:8.6-alpine as builder

RUN apk add --update --no-progress make python bash
ENV NPM_CONFIG_LOGLEVEL error

COPY karma.conf.js .
COPY protractor.conf.js .
COPY tsconfig.json .
COPY tslint.json .
COPY package.json .
COPY package-lock.json .
COPY .angular-cli.json .
COPY e2e .
COPY src .

RUN npm install
RUN npm run build -- --prod

FROM duluca/minimal-node-web-server:8.6.0

WORKDIR /usr/src/app
COPY --from=builder ./dist public
