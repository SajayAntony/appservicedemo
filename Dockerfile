FROM nginx:latest
COPY ./version.txt /usr/share/nginx/html/index.html

