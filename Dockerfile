FROM node:latest
WORKDIR /
COPY . /
CMD ["node", "src/index.js"] 

