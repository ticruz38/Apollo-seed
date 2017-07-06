FROM node:6-alpine
ENV NODE_ENV production
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 8080
CMD npm run start:server
