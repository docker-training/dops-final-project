FROM node:9.4-alpine
RUN npm install -g http-server
COPY . /app
WORKDIR /app
EXPOSE 8080
CMD ["http-server"]
