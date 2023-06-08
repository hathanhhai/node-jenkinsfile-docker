FROM node:16
COPY . /app
WORKDIR /app
RUN npm install 

FROM gcr.io/distroless/nodejs
COPY --from=dep /app /app
WORKDIR /app
EXPOSE 3000
CMD ["index.js"]