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

func CreateDummyArticle(ctx context.Context, connectDB *sql.DB) {

	insertArticle := models.Article{
		Title:       gofakeit.Name(),
		Description: gofakeit.HipsterSentence(3),
		Status:      "test",
	}

	if err := insertArticle.Insert(ctx, connectDB, boil.Infer()); err != nil {
		log.Printf("insert article error : %s", err)
	}

	insertMultipleArtcle := []*models.Article{{Title: gofakeit.Name(),
		Description: gofakeit.HipsterSentence(3),
		Status:      "test"},
		{Title: gofakeit.Name(),
			Description: gofakeit.HipsterSentence(3),
			Status:      "test"},
	}

	for _, article := range insertMultipleArtcle {
		if err := article.Insert(ctx, connectDB, boil.Infer()); err != nil {
			log.Printf("multi insert article error : %s", err)
		}
	}

}
