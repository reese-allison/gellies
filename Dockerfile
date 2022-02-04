FROM node:17-alpine3.14 as build

WORKDIR /app

COPY frontend/. /app
RUN npm install
RUN npm run build:prod

FROM nginx:1.21.6
RUN rm /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
