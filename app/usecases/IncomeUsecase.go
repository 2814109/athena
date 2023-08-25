package usecases

import (
	"context"
	"my_gql_server/graph/model"
	"my_gql_server/infrastructures/repositories"
	"my_gql_server/models"
)

type IncomeUseCase interface {
	Create(ctx context.Context, input model.CreateIncome) (*models.Income, error)
}

type incomeService struct {
	// r *repositories
}

func NewIncomeService() IncomeUseCase {
	// TODO instance for repository
	return &incomeService{}
}

func (i *incomeService) Create(ctx context.Context, input model.CreateIncome) (*models.Income, error) {
	repository := repositories.NewRepository()
	result, err := repository.CreateIncome(ctx, input)

	if err != nil {
		return nil, err
	}
	return result, nil
}
