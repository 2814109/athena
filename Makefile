include .env


setup:
	docker-compose build --no-cache
	docker-compose up -d

build:
	docker-compose up -d --build

migrate-up:
	migrate --path db/migrations --database 'postgres://${PSQL_USER}:${PSQL_PASS}@localhost:5432/${PSQL_DBNAME}?sslmode=disable' -verbose up

migrate-down:
	migrate --path db/migrations --database 'postgres://${PSQL_USER}:${PSQL_PASS}@localhost:5432/${PSQL_DBNAME}?sslmode=disable' -verbose down

migrate-force:
	migrate --path db/migrations --database 'postgres://${PSQL_USER}:${PSQL_PASS}@localhost:5432/${PSQL_DBNAME}?sslmode=disable' -verbose force 1

create-migration-%:
	migrate create -ext sql -dir db/migrations -seq ${@:create-migration-%=%}