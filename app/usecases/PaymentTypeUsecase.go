package usecases

import (
	"context"
	"my_gql_server/infrastructures/repositories"
	"my_gql_server/models"
)

type PaymentTypeUsecase interface {
	View(ctx context.Context) (*models.PaymentTypeSlice, error)
}

type PaymentTypeService struct {
}

func NewPaymentTypeUsecase() PaymentTypeUsecase {
	return &PaymentTypeService{}
}

func (c *PaymentTypeService) View(ctx context.Context) (*models.PaymentTypeSlice, error) {
	repository := repositories.NewRepository()
	result, err := repository.FindAllPaymentType(ctx)
	if err != nil {
		return nil, err
	}
	return result, nil
}
