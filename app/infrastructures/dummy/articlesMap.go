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

func CreateDummyArticlesMap(ctx context.Context, connectDB *sql.DB) {

	articles := lop.Map([]string{"sample", "sample", "sample"}, func(status string, _ int) models.Article {
		return models.Article{
			Title:       "map insert",
			Description: gofakeit.HipsterSentence(3),
			Status:      status,
		}
	})

	lo.ForEach(articles, func(article models.Article, index int) {
		if err := article.Insert(ctx, connectDB, boil.Infer()); err != nil {
			log.Printf("multi insert article for each error : %s , index is %v", err, index)
		}
	})

}
