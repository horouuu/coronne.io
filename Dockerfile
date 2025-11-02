FROM nginx:mainline-alpine-slim

COPY index.html styles.css script.js fonts/ icons/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf