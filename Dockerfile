FROM node:8.9-alpine

# set working directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY webapp/package.json /usr/src/app/package.json
RUN npm install npm@latest -g
RUN npm install -g @angular/cli@v6.0.3
RUN ng update @angular/cli --migrate-only --from=1.7.4

# add app
COPY . /usr/src/app

# start app
CMD ng serve --host 0.0.0.0