FROM golang:1.20-alpine

WORKDIR /app

RUN go install github.com/cosmtrek/air@latest
RUN mkdir /go/src/app
WORKDIR /go/src/app
ADD . /go/src/app
EXPOSE 8080
COPY ./app/go.mod ./app/go.sum ./
RUN go mod download

CMD ["air", "-c", ".air.toml"]
# FROM golang:1.19.1-alpine

# RUN apk update && apk add git
# RUN go get github.com/cosmtrek/air@v1.29.0
# RUN mkdir /go/src/app
# WORKDIR /go/src/app
# ADD . /go/src/app
# EXPOSE 8080

# # CMD ["go","run","server.go"]

# CMD ["air", "-c", ".air.toml"]
