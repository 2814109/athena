package libs

import (
	"context"
	"database/sql"
	"log"

	_ "github.com/lib/pq"

	models "my_gql_server/my_models"

	lop "github.com/samber/lo/parallel"
)

func GetCategoryClassificationList(ctx context.Context, connectDB *sql.DB) []string {

	catetories, err := models.Categories().All(ctx, connectDB)
	if err != nil {
		log.Printf("error : %s", err)
	}

	categoryClassificationList := lop.Map(catetories, func(category *models.Category, _ int) string {
		return category.Classification
	})

	return categoryClassificationList

}
