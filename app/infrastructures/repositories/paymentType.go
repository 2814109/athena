package repositories

import (
	"context"
	"my_gql_server/models"
)

func (r *repository) FindAllPaymentType(ctx context.Context) (*models.PaymentTypeSlice, error) {

	paymentTypes, err := models.PaymentTypes().AllG(ctx)

	if err != nil {
		return nil, err
	}

	return &paymentTypes, nil
}
