FROM node:12.10.0-alpine as build-deps
WORKDIR /app
COPY package.json ./
RUN npm install --silent
COPY . /app
RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=build-deps /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
