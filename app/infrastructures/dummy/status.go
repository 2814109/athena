package dummy

import (
	"context"
	"database/sql"

	models "my_gql_server/my_models"

	"github.com/volatiletech/sqlboiler/v4/boil"

	_ "github.com/lib/pq"
)

func CreateDummyStatus(ctx context.Context, connectDB *sql.DB) {

	status := models.Status{
		Label: "test",
	}

	status.Insert(ctx, connectDB, boil.Infer())

}
