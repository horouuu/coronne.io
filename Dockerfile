FROM nginx:mainline-alpine-slim

COPY . /usr/share/nginx/html
COPY special.conf /etc/nginx/conf.d/special.conf