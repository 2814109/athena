include .env

# setup:
# 	docker-compose build --no-cache
# 	docker-compose up -d

# build:
# 	docker-compose up -d --build

# mg-up:
# 	migrate --path db/migrations --database 'postgres://${PSQL_USER}:${PSQL_PASS}@localhost:5432/${PSQL_DBNAME}?sslmode=disable' -verbose up
# mg-down:
# 	migrate --path db/migrations --database 'postgres://${PSQL_USER}:${PSQL_PASS}@localhost:5432/${PSQL_DBNAME}?sslmode=disable' -verbose down
mg-force:
	migrate --path db/migrations --database 'postgres://${PSQL_USER}:${PSQL_PASS}@localhost:5432/${PSQL_DBNAME}?sslmode=disable' -verbose force 1
# mg-drop:
# 	migrate --path db/migrations --database 'postgres://${PSQL_USER}:${PSQL_PASS}@localhost:5432/${PSQL_DBNAME}?sslmode=disable' -verbose drop

create-m-%:
	migrate create -ext sql -dir db/migrations -seq ${@:create-migration-%=%}
