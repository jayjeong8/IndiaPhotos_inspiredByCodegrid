FROM nginx:1.21.1-alpine

WORKDIR /india
COPY css css
COPY india-photos india-photos
COPY js js
COPY src src
COPY ./*.html .
COPY nginx.conf /etc/nginx/conf.d/default.conf