package main

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/lib/pq"
	"github.com/volatiletech/sqlboiler/v4/boil"

	"github.com/joho/godotenv"

	"my_gql_server/infrastructures/dummies"

	"my_gql_server/infrastructures/seeders"
)

func main() {

	err := godotenv.Load("../.env")

	var PSQL_DBNAME string
	var PSQL_USER string
	var PSQL_PASS string

	if err != nil {
		log.Printf("読み込み出来ませんでした: %v", err)
	}

	PSQL_DBNAME = os.Getenv("PSQL_DBNAME")
	PSQL_USER = os.Getenv("PSQL_USER")
	PSQL_PASS = os.Getenv("PSQL_PASS")

	connectDB, err := sql.Open("postgres", fmt.Sprintf("dbname=%s user=%s password=%s sslmode=disable", PSQL_DBNAME, PSQL_USER, PSQL_PASS))

	if err != nil {
		log.Fatalf("error : %s", err)
	}

	boil.SetDB(connectDB)
	boil.DebugMode = true

	ctx := context.Background()

	seeders.UpsertDummyCategories(ctx, connectDB)
	seeders.UpsertDummyStatuses(ctx, connectDB)

	dummies.CreateDummyUsers(ctx, connectDB)
	dummies.CreateDummyArticles(ctx, connectDB)
	dummies.CreateAnnualItems(ctx, connectDB)
	dummies.CreateTodos(ctx, connectDB)

}
