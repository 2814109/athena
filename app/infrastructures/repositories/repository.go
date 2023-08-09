package repositories

import (
	"context"
	"my_gql_server/graph/model"
	models "my_gql_server/models"
)

type RepositoryInterface interface {
	FindAllTodoByUserId(ctx context.Context, userId int) (models.TodoSlice, error)
	CreateTodo(ctx context.Context, input model.CreateTodo) (*models.Todo, error)
	UpdateTodo(ctx context.Context, input model.UpdateTodo) (*models.Todo, error)
	FindTodoByID(ctx context.Context, ID int) (*models.Todo, error)
	FindAllItemByUserId(ctx context.Context, userId int) (models.ItemSlice, error)
	FindAllArticle(ctx context.Context, status model.ArticleStatuses) (models.ArticleSlice, error)
	CreatePredictCost(ctx context.Context, input model.CreatePredictCost) (*models.PredictCost, error)
	FindAllCategory(ctx context.Context) (*models.CategorySlice, error)
	GetPredictCostByUserId(ctx context.Context, userId int) (models.PredictCostSlice, error)
	DeletePredictCostById(ctx context.Context, predictCostId int) (bool, error)
	CreatePayment(ctx context.Context, input model.CreatePayment) (*models.Payment, error)
	GetPaymentsByUserId(ctx context.Context, userId int) (models.PaymentSlice, error)
	FindAllPaymentType(ctx context.Context) (*models.PaymentTypeSlice, error)
}

func NewRepository() RepositoryInterface {
	return &repository{}
}

type repository struct{}
