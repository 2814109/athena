package repositories

import (
	"context"
	"my_gql_server/graph/model"
	"my_gql_server/models"

	"github.com/volatiletech/sqlboiler/v4/boil"
)

func (repository *repository) CreatePredictCost(ctx context.Context, input model.CreatePredictCost) (*models.PredictCost, error) {

	resource := &models.PredictCost{
		CategoryName: input.CategoryName,
		Label:        input.Label,
		Amount:       input.Amount,
		UserID:       input.UserID,
	}

	if err := resource.InsertG(ctx, boil.Infer()); err != nil {
		return nil, err
	}

	if err := resource.ReloadG(ctx); err != nil {
		return nil, err
	}

	return resource, nil
}
