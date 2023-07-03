package main

import (
	"context"
	"database/sql"
	"log"

	_ "github.com/lib/pq"
	"github.com/volatiletech/sqlboiler/v4/boil"
)

func main() {
	connectDB, err := sql.Open("postgres", "dbname=postgres user=postgres")
	if err != nil {
		log.Fatalf("error : %s", err)
	}

	boil.SetDB(connectDB)
	boil.DebugMode = true

	ctx := context.Background()

	log.Printf("context : %s", ctx)

}
