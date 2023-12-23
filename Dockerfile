FROM nginx:1.25-alpine-slim

WORKDIR /india
COPY css css
COPY js js
COPY img img
COPY src src
COPY ./*.html ./
COPY nginx.conf /etc/nginx/conf.d/default.conf
