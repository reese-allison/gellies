FROM nginx:1.21.6

RUN rm /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx
COPY ./html/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
