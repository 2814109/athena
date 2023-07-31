package usecases

import (
	"context"
	"my_gql_server/graph/model"
	models "my_gql_server/models"
)

type TodoUseCase interface {
	CreateTodo(ctx context.Context, input model.CreateTodo) error
	GetTodoByID(ctx context.Context, id int) (*models.Todo, error)
}

type todoService struct {
	// r *repositories

}

func NewTodoService() TodoUseCase {
	// TODO instance for repository
	return &todoService{}
}

func (t *todoService) CreateTodo(ctx context.Context, input model.CreateTodo) error {

	// b.dbConnect => repository layer

	return nil
}

func (t *todoService) GetTodoByID(ctx context.Context, id int) (*models.Todo, error) {
	// データベースからデータを取得して返す
	return nil, nil
}
