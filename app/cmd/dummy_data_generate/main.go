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
)

func main() {

	err := godotenv.Load("../.env")

	if err != nil {
		log.Printf("読み込み出来ませんでした: %v", err)
	}

	PSQL_DBNAME := os.Getenv("PSQL_DBNAME")

	PSQL_USER := os.Getenv("PSQL_USER")

	connectDB, err := sql.Open("postgres", fmt.Sprintf("dbname=%s user=%s", PSQL_DBNAME, PSQL_USER))
	if err != nil {
		log.Fatalf("error : %s", err)
	}

	boil.SetDB(connectDB)
	boil.DebugMode = true

	ctx := context.Background()

	log.Printf("context : %s", ctx)

}
