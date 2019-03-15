### ETAPE 1: Build ###
FROM node:9.11.1 as builder

ARG REACT_APP_ENV_TYPE

RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . /usr/src/app
RUN npm run build

### ETAPE 2: STATIC TIME ###
FROM nginx:1.13.12-alpine
COPY --from=builder /usr/src/app/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
