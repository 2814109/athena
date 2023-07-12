package repositories

import (
	"context"
	"database/sql"
	"fmt"
	"my_gql_server/graph/model"
	models "my_gql_server/my_models"

	"github.com/volatiletech/sqlboiler/v4/queries/qm"
)

func FindAllArticle(ctx context.Context, status model.ArticleStatuses) (models.ArticleSlice, error) {
	connectDB, err := sql.Open("postgres", fmt.Sprintf("host=postgres dbname=%s user=%s password=%s sslmode=disable", "postgres", "postgres", "postgres"))

	if err != nil {
		return nil, err
	}

	articles, modelErr := models.Articles(qm.Load(models.ArticleRels.ArticleStatus), models.ArticleWhere.Status.EQ(status.String())).All(ctx, connectDB)

	if modelErr != nil {
		return nil, modelErr
	}
	return articles, nil

}
