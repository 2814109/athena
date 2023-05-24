include .env


setup:
	docker-compose build --no-cache
	docker-compose up -d

migrate-up:
	migrate --path db/migrations --database 'postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_DATABASE}?sslmode=disable' -verbose up

migrate-down:
	migrate --path db/migrations --database 'postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/${DB_DATABASE}?sslmode=disable' -verbose down
