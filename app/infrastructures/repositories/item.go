package repositories

import (
	"context"
	"log"
	models "my_gql_server/my_models"

	_ "github.com/lib/pq"
	"github.com/volatiletech/sqlboiler/v4/queries/qm"
)

func (repository *repository) FindAllItemByUserId(ctx context.Context, userId int) (models.ItemSlice, error) {
	items, modelErr := models.Items(qm.Load(models.ItemRels.User), models.ItemWhere.UserID.EQ(userId)).AllG(ctx)
	if modelErr != nil {
		log.Print("error of modelErr")
		return nil, modelErr
	}
	return items, nil
}
