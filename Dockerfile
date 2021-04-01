FROM node:alpine AS builder

COPY ./ /app
RUN cd /app; \
  yarn; \
  yarn build

FROM nginx:alpine

RUN { \
  echo 'server {'; \
  echo '  listen       80;'; \
  echo '  listen  [::]:80;'; \
  echo '  server_name  _;'; \
  echo '  location / {'; \
  echo '    root   /usr/share/nginx/html;'; \
  echo '    index  index.html;'; \
  echo '    try_files $uri $uri/ /index.html;'; \
  echo '  }'; \
  echo '}'; \
} > /etc/nginx/conf.d/default.conf 

COPY --from=builder /app/build /usr/share/nginx/html 
