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

func UpsertSeederOfAccountTypes(ctx context.Context, connectDB *sql.DB) {
	// string as status pattern
	types := []string{"Assets", "Liabilities", "Equity", "Revenue", "Expenses", "ImpairmentLoss"}

	resources := lop.Map(types, func(element string, _ int) models.AccountType {
		return models.AccountType{
			Label: element,
		}
	})
	lo.ForEach(resources, func(resource models.AccountType, index int) {
		if err := resource.Upsert(ctx, connectDB, true, []string{"label"}, boil.Whitelist("label"), boil.Infer()); err != nil {
			log.Printf("error : %s , index is %v", err, index)
		}
	})
}
