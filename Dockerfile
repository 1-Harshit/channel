# Build React App
FROM node:16-alpine AS node_builder

RUN mkdir /app
ADD . /app
WORKDIR /app/web

RUN npm install
RUN npm run build

# Build Go App and add React app
FROM golang:1.16-alpine AS builder

RUN apk add build-base

RUN mkdir /app
WORKDIR /app

COPY go.mod .
COPY go.sum .

RUN go mod download

COPY . .
COPY --from=node_builder /app/web/build ./web/build

RUN go build -o main ./cmd/server

EXPOSE 8080

CMD ["/app/main"]
