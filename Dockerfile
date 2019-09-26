FROM node:11-slim

RUN apt-get update -qq && \
  apt-get install -y build-essential

RUN yarn global add vue-cli
RUN yarn global add quasar-cli
RUN yarn global add surge

WORKDIR /indexer
