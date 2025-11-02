FROM nginx:mainline-alpine-slim

COPY index.html styles.css script.js fonts icons /usr/share/nginx/html/
COPY special.conf /etc/nginx/conf.d/special.conf