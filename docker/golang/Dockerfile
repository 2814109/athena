FROM golang:1.20-alpine

WORKDIR /app

RUN go install github.com/cosmtrek/air@latest 
# RUN go install github.com/lib/pq 
RUN go install github.com/volatiletech/sqlboiler/v4@latest
RUN go install github.com/volatiletech/sqlboiler/v4/drivers/sqlboiler-psql@latest 
RUN apk --no-cache add postgresql-client
RUN mkdir /go/src/app
WORKDIR /go/src/app
ADD . /go/src/app
EXPOSE 8080
COPY ./app/go.mod ./app/go.sum ./
RUN go mod tidy

CMD ["air", "-c", ".air.toml"]

