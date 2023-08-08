package usecases

import (
	"context"
	"my_gql_server/graph/model"
	"my_gql_server/infrastructures/repositories"
	"my_gql_server/models"
)

type PaymentUsecase interface {
	Create(ctx context.Context, input model.CreatePayment) (*models.Payment, error)
}

type paymentService struct {
}

func NewPaymentService() PaymentUsecase {
	return &paymentService{}
}

func (p *paymentService) Create(ctx context.Context, input model.CreatePayment) (*models.Payment, error) {
	repository := repositories.NewRepository()
	result, err := repository.CreatePayment(ctx, input)

	if err != nil {
		return nil, err
	}
	return result, nil
}