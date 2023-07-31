package usecases

import (
	"context"
	"my_gql_server/infrastructures/repositories"
	"my_gql_server/models"
)

type CategoryUsecase interface {
	View(ctx context.Context) (*models.CategorySlice, error)
}

type categoryService struct {
}

func NewCategoryUsecase() CategoryUsecase {
	return &categoryService{}
}

func (c *categoryService) View(ctx context.Context) (*models.CategorySlice, error) {
	repository := repositories.NewRepository()
	result, err := repository.FindAllCategory(ctx)
	if err != nil {
		return nil, err
	}
	return result, nil
}
