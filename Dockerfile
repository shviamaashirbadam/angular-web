FROM node:8.9-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["webapp/package.json", "webapp/package-lock.json*", "webapp/npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
RUN npm install npm@latest -g
RUN npm install -g @angular/cli@latest
COPY . .
EXPOSE 4200
CMD npm start