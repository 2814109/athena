package seeders

import (
	"context"
	"database/sql"
	"log"

	models "my_gql_server/models"

	"github.com/volatiletech/sqlboiler/v4/boil"

	_ "github.com/lib/pq"

	"github.com/samber/lo"

	lop "github.com/samber/lo/parallel"
)

func UpsertSeederOfStatuses(ctx context.Context, connectDB *sql.DB) {
	// string as status pattern
	statusPattern := []string{"Draft", "UnderReview", "Published", "Deleted", "OnHold"}

	statusesModel := lop.Map(statusPattern, func(statusLabel string, _ int) models.Status {
		return models.Status{
			Label: statusLabel,
		}
	})
	lo.ForEach(statusesModel, func(status models.Status, index int) {
		if err := status.Upsert(ctx, connectDB, true, []string{"label"}, boil.Whitelist("label"), boil.Infer()); err != nil {
			log.Printf("error : %s , index is %v", err, index)
		}
	})
}
