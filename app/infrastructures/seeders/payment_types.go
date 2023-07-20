package seeders

import (
	"context"
	"database/sql"
	"log"

	models "my_gql_server/my_models"

	"github.com/volatiletech/sqlboiler/v4/boil"

	_ "github.com/lib/pq"

	"github.com/samber/lo"

	lop "github.com/samber/lo/parallel"
)

func UpsertSeederOfPaymentTypes(ctx context.Context, connectDB *sql.DB) {
	// string as status pattern
	paymentTypes := []string{"Cash", "CreditCard", "Loan"}

	paymentTypesModel := lop.Map(paymentTypes, func(paymentType string, _ int) models.PaymentType {
		return models.PaymentType{
			Label: paymentType,
		}
	})
	lo.ForEach(paymentTypesModel, func(paymentType models.PaymentType, index int) {
		if err := paymentType.Upsert(ctx, connectDB, true, []string{"label"}, boil.Whitelist("label"), boil.Infer()); err != nil {
			log.Printf("error : %s , index is %v", err, index)
		}
	})
}
