FROM node:8.1

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY ./src  /usr/src/app

EXPOSE 800
CMD [ "node", "server.js" ]


