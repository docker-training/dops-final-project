FROM node:9.4-alpine
COPY ./src/package.json /app/
WORKDIR /app
RUN npm install
COPY ./src /app
EXPOSE 3000
CMD ["npm", "start"]
