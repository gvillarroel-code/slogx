FROM node:latest
WORKDIR /
COPY . /
CMD ["node", "app.js"] 

