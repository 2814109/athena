package repositories

import (
	"context"
	"fmt"
	"my_gql_server/graph/model"
	"my_gql_server/models"
	"time"

	"github.com/volatiletech/sqlboiler/v4/boil"
)

func (repository *repository) CreatePayment(ctx context.Context, input model.CreatePayment) (*models.Payment, error) {
	layoutISO := "2006-01-02"
	parsedTime, err := time.Parse(layoutISO, input.PaymentAt)
	if err != nil {
		fmt.Println("変換エラー:", err)
		return nil, err
	}
	resource := &models.Payment{
		CategoryName: input.CategoryName,
		Label:        input.Label,
		Cost:         input.Cost,
		UserID:       input.UserID,
		PaymentAt:    parsedTime,
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
