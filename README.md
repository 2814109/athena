# athena-golang

## generated model from schema at container(Golang)
```
go run github.com/99designs/gqlgen generate
```

## create graphql step
### update schema
- to edit app/graph/schema.graphqls
- to create types or input

## how to migrate
### create schema file
```
migrate create -ext sql -dir db/migrations -seq ${file_name}
```

### migration command
```
migrate --path db/migrations --database 'postgres://${user_name}:${user_passward}@localhost:5432/postgres?sslmode=disable' -verbose up
```
- [Ref: Org](https://github.com/golang-migrate/migrate/blob/master/database/postgres/TUTORIAL.md)