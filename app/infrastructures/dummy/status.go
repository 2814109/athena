package dummy

import (
	"context"
	"database/sql"

	models "my_gql_server/my_models"

	"github.com/volatiletech/sqlboiler/v4/boil"

	_ "github.com/lib/pq"

	gofakeit "github.com/brianvoe/gofakeit/v6"
)

func CreateDummyStatus(ctx context.Context, connectDB *sql.DB) {

	status := models.Status{
		Label: gofakeit.Name(),
	}

	status.Insert(ctx, connectDB, boil.Infer())

}
