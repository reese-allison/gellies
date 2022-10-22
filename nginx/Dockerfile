FROM node:14.15.1 as frontend
WORKDIR /app
COPY ./frontend /app/
RUN yarn
RUN yarn build:prod

FROM nginx:1.21.6
ARG ENV

COPY --from=frontend /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
