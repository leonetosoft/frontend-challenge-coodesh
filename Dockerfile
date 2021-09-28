# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
RUN apk add nano

COPY ./dockerfiles/default.conf /etc/nginx/conf.d
# Copy static assets from builder stage
#COPY --from=builder /app/dist/angular-nginx-docker .
COPY ./dist/frontEndChallengeCoodesh/ .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]