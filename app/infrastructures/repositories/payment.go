package repositories

import (
	"context"
	"my_gql_server/graph/model"
	"my_gql_server/models"

	"github.com/volatiletech/sqlboiler/v4/boil"
	"github.com/volatiletech/sqlboiler/v4/queries/qm"
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

func (repository *repository) GetPaymentsByUserId(ctx context.Context, userId int) (models.PaymentSlice, error) {

	payments, err := models.Payments(qm.Load(models.PaymentRels.User), models.PaymentWhere.UserID.EQ(userId), qm.OrderBy("payment_at ASC")).AllG(ctx)
	if err != nil {
		return nil, err
	}
	return payments, nil
}

func (repository *repository) DeletePaymentById(ctx context.Context, paymentId int) (bool, error) {
	resource := &models.Payment{
		ID: paymentId,
	}

	_, err := resource.DeleteG(ctx)
	if err != nil {
		return false, err
	}
	return true, nil
}
