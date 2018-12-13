FROM node:9.6.1 as builder
RUN mkdir /code
WORKDIR /code
ENV PATH /code/node_modules/.bin:$PATH
COPY package.json /code/package.json
RUN npm install
RUN npm install react-scripts@2.1.1 -g
COPY . .
RUN npm run build

# production environment
FROM nginx:1.13.9-alpine
COPY --from=builder /code/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
