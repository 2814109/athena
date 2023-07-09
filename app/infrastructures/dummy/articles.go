package dummy

import (
	"context"
	"database/sql"
	"log"

	models "my_gql_server/my_models"

	"github.com/volatiletech/sqlboiler/v4/boil"

	_ "github.com/lib/pq"

	gofakeit "github.com/brianvoe/gofakeit/v6"
)

func CreateDummyArticles(ctx context.Context, connectDB *sql.DB) {

	articles := []*models.Article{{Title: gofakeit.Name(),
		Description: gofakeit.HipsterSentence(3),
		Status:      "test"},
		{Title: gofakeit.Name(),
			Description: gofakeit.HipsterSentence(3),
			Status:      "test"},
	}

	for index, article := range articles {
		if err := article.Insert(ctx, connectDB, boil.Infer()); err != nil {
			log.Printf("multi insert article error : %s , index is %v", err, index)
		}
	}

}
