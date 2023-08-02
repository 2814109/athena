package usecases

import (
	"context"
	"my_gql_server/graph/model"
	"my_gql_server/infrastructures/repositories"
	"my_gql_server/models"
)

type PredictCostUseCase interface {
	CreatePredictCost(ctx context.Context, input model.CreatePredictCost) (*models.PredictCost, error)
	GetAllPredictCostByUserId(ctx context.Context, userId int) (models.PredictCostSlice, error)
	DeletePredictCost(ctx context.Context, predictCostId int) (bool, error)
}

type predictService struct {
	// r *repositories

}

func NewPredictCostService() PredictCostUseCase {
	return &predictService{}
}

func (p *predictService) CreatePredictCost(ctx context.Context, input model.CreatePredictCost) (*models.PredictCost, error) {
	repository := repositories.NewRepository()
	result, err := repository.CreatePredictCost(ctx, input)

	if err != nil {
		return nil, err
	}
	return result, nil
}

func (p *predictService) GetAllPredictCostByUserId(ctx context.Context, userId int) (models.PredictCostSlice, error) {
	repository := repositories.NewRepository()
	result, err := repository.GetPredictCostByUserId(ctx, userId)

	if err != nil {
		return nil, err
	}
	return result, nil

}

func (p *predictService) DeletePredictCost(ctx context.Context, predictCostId int) (bool, error) {
	repository := repositories.NewRepository()
	result, err := repository.DeletePredictCostById(ctx, predictCostId)

	if err != nil {
		return false, err
	}

	return result, nil
}
