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
}

func NewRepository() RepositoryInterface {
	return &repository{}
}

type repository struct{}
