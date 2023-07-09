package dummy

import (
	"context"
	"database/sql"
	"log"

	models "my_gql_server/my_models"

	"github.com/volatiletech/sqlboiler/v4/boil"

	_ "github.com/lib/pq"

	gofakeit "github.com/brianvoe/gofakeit/v6"

	"github.com/samber/lo"

	lop "github.com/samber/lo/parallel"
)

func CreateDummyItems(ctx context.Context, connectDB *sql.DB) {

	count := 300
	catetories, err := models.Categories().All(ctx, connectDB)

	if err != nil {
		log.Printf("error : %s", err)
	}

	users, err := models.Users().All(ctx, connectDB)

	if err != nil {
		log.Printf("error : %s", err)
	}

	categoryClassificationList := lop.Map(catetories, func(category *models.Category, _ int) string {
		return category.Classification
	})

	userIdList := lop.Map(users, func(user *models.User, _ int) int {
		return user.ID
	})

	items := lo.Times(count, func(_ int) models.Item {
		return models.Item{
			Label:        gofakeit.Word(),
			UserID:       userIdList[gofakeit.Number(0, len(userIdList)-1)],
			CategoryName: categoryClassificationList[gofakeit.Number(0, len(categoryClassificationList)-1)],
		}
	})

	lo.ForEach(items, func(item models.Item, index int) {
		if err := item.Insert(ctx, connectDB, boil.Infer()); err != nil {
			log.Printf("multi insert item for each error : %s , index is %v", err, index)
		}
	})

}
