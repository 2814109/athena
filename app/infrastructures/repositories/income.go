package repositories

import (
	"context"
	"my_gql_server/graph/model"
	"my_gql_server/models"

	"github.com/volatiletech/sqlboiler/v4/boil"
)

func (repository *repository) CreateIncome(ctx context.Context, input model.CreateIncome) (*models.Income, error) {

	resource := &models.Income{
		Label:    input.Label,
		Amount:   input.Cost,
		UserID:   input.UserID,
		IncomeAt: input.IncomeAt,
	}

	if err := resource.InsertG(ctx, boil.Infer()); err != nil {
		return nil, err
	}

	if err := resource.ReloadG(ctx); err != nil {
		return nil, err
	}

	return resource, nil
}
