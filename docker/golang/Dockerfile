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

