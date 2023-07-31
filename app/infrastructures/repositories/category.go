package repositories

import (
	"context"
	"my_gql_server/models"
)

func (r *repository) FindAllCategory(ctx context.Context) (*models.CategorySlice, error) {

	categories, err := models.Categories().AllG(ctx)

	if err != nil {
		return nil, err
	}

	return &categories, nil
}
