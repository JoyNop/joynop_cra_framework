FROM    nginx
LABEL   author="hanrui"
# LABEL   joynop.io/name=joynop-cra
COPY    build /root/app
COPY    server/config /root/config
COPY    server/config/default.conf /etc/nginx/nginx.conf
COPY    server/config/mime.types /etc/nginx/mime.types

EXPOSE  80 443

 