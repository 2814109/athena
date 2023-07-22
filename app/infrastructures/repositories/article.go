package repositories

import (
	"context"
	"my_gql_server/graph/model"
	models "my_gql_server/my_models"

	"github.com/volatiletech/sqlboiler/v4/queries/qm"
)

func (repository *repository) FindAllArticle(ctx context.Context, status model.ArticleStatuses) (models.ArticleSlice, error) {
	articles, modelErr := models.Articles(qm.Load(models.ArticleRels.ArticleStatus), models.ArticleWhere.Status.EQ(status.String())).AllG(ctx)
	if modelErr != nil {
		return nil, modelErr
	}
	return articles, nil

}
