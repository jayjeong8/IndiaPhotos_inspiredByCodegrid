FROM nginx:1.21.1-alpine

WORKDIR /india
VOLUME /india/india-photos
COPY css css
COPY js js
COPY src src
COPY ./*.html ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
