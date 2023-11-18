FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for && \
    npm install

EXPOSE 3000
