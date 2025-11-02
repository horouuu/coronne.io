FROM nginx:mainline-alpine-slim

COPY index.html styles.css script.js fonts/ icons/ /usr/share/nginx/html/
COPY fonts /usr/share/nginx/html/fonts/
COPY icons /usr/share/nginx/html/icons/
COPY nginx.conf /etc/nginx/nginx.conf