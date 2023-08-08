package repositories

import (
	"context"
	"my_gql_server/graph/model"
	"my_gql_server/models"

	"github.com/volatiletech/sqlboiler/v4/boil"
)

func (repository *repository) CreatePayment(ctx context.Context, input model.CreatePayment) (*models.Payment, error) {

	resource := &models.Payment{
		CategoryName: input.CategoryName,
		Label:        input.Label,
		Cost:         input.Cost,
		UserID:       input.UserID,
		PaymentAt:    input.PaymentAt,
		PaymentType:  input.PaymentType,
	}

	if err := resource.InsertG(ctx, boil.Infer()); err != nil {
		return nil, err
	}

	if err := resource.ReloadG(ctx); err != nil {
		return nil, err
	}

	return resource, nil
}
