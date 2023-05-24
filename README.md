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


## create network for docker
```
docker network create ${network_name}
```

## connect check
```
ping 0.0.0.0:5432
```

## Tips
### sqlboiler.toml
```
[psql]
  dbname = "postgres"
  -- have to set container service name --
  host   = "db"
  port   = 5432
  user   = "postgres"
  pass   = "postgres"
  sslmode= "disable"
  schema = "public"
  blacklist = ["migrations", "other"]
```