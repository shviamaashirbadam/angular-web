FROM node:8.9-alpine

# set working directory
RUN sudo mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install npm@latest -g
RUN npm install -g @angular/cli@latest

# add app
COPY . /usr/src/app

# start app
CMD ng serve --host 0.0.0.0