FROM nginx:mainline-alpine-slim

COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
