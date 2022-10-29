FROM node:14.15.1 as frontend
ARG ENV

COPY ./frontend/package.json ./frontend/yarn.lock /tmp/
RUN cd /tmp && yarn && npx browserslist@latest --update-db
RUN mkdir -p /app && cp -a /tmp/node_modules /opt/app/

WORKDIR /app
COPY ./frontend /app/
RUN yarn build:${ENV}

FROM nginx:1.21.6
ARG ENV

COPY --from=frontend /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/${ENV}.nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
