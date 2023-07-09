package dummy

import (
	"context"
	"database/sql"
	"log"

	models "my_gql_server/my_models"

	"github.com/volatiletech/sqlboiler/v4/boil"

	_ "github.com/lib/pq"
)

func CreateDummyStatus(ctx context.Context, connectDB *sql.DB) {

	insertStatus := models.Status{
		Label: "test",
	}

	if err := insertStatus.Upsert(ctx, connectDB, true, []string{"label"}, boil.Whitelist("label"), boil.Infer()); err != nil {
		log.Printf("insert status error : %s", err)

	}
}
