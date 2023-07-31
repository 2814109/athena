package usecases

import (
	"context"
	"my_gql_server/graph/model"
)

type PredictCostUseCase interface {
	CreatePredictCost(ctx context.Context, input model.CreatePredictCost) error
}

type predictService struct {
	// r *repositories

}

func NewPredictCostService() PredictCostUseCase {
	return &predictService{}
}

func (p *predictService) CreatePredictCost(ctx context.Context, input model.CreatePredictCost) error {
	return nil
}
