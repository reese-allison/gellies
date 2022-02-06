FROM nginx:1.21.6
ARG ENV

RUN rm /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf
COPY ./${ENV}.nginx.conf /etc/nginx/nginx.conf
COPY ./html/ /usr/share/nginx/html/

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
