FROM ubuntu:16.04
MAINTAINER Denys Metelskyy <denys.y.metelskyy@gmail.com>

RUN apt-get update

RUN apt-get install -y \
  build-essential \
  git \
  python-pip \
  nodejs \
  npm \
  nodejs-legacy

RUN npm install -g typescript

EXPOSE 8080 8080

WORKDIR /workspace
