package repositories

import (
	"context"
	"my_gql_server/graph/model"
	"my_gql_server/models"

	"github.com/volatiletech/sqlboiler/v4/boil"
	"github.com/volatiletech/sqlboiler/v4/queries/qm"
)

func (repository *repository) CreatePredictCost(ctx context.Context, input model.CreatePredictCost) (*models.PredictCost, error) {

	resource := &models.PredictCost{
		CategoryName: input.CategoryName,
		Label:        input.Label,
		Amount:       input.Amount,
		UserID:       input.UserID,
	}

	if err := resource.InsertG(ctx, boil.Infer()); err != nil {
		return nil, err
	}

	if err := resource.ReloadG(ctx); err != nil {
		return nil, err
	}

	return resource, nil
}

func (repository *repository) GetPredictCostByUserId(ctx context.Context, userId int) (models.PredictCostSlice, error) {

	predictCosts, err := models.PredictCosts(qm.Load(models.PredictCostRels.User), models.PredictCostWhere.UserID.EQ(userId)).AllG(ctx)
	if err != nil {
		return nil, err
	}
	return predictCosts, nil
}

func (repository *repository) DeletePredictCostById(ctx context.Context, predictCostId int) (bool, error) {
	resource := &models.PredictCost{
		ID: predictCostId,
	}

	_, err := resource.DeleteG(ctx)
	if err != nil {
		return false, err
	}
	return true, nil
}
