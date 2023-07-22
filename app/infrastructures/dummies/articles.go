package dummies

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

func CreateDummyArticles(ctx context.Context, connectDB *sql.DB) {

	count := 20
	statuses, err := models.Statuses().All(ctx, connectDB)

	if err != nil {
		log.Printf("error : %s", err)
	}

	statusList := lop.Map(statuses, func(status *models.Status, _ int) string {
		return status.Label
	})

	articles := lo.Times(count, func(_ int) models.Article {
		return models.Article{
			Title:       gofakeit.BookTitle(),
			Description: gofakeit.HipsterSentence(3),
			Status:      statusList[gofakeit.Number(0, len(statusList)-1)],
		}
	})

	lo.ForEach(articles, func(article models.Article, index int) {
		if err := article.Insert(ctx, connectDB, boil.Infer()); err != nil {
			log.Printf("multi insert article for each error : %s , index is %v", err, index)
		}
	})

}
