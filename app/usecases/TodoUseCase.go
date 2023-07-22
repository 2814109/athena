package usecases

import (
	"context"
	"database/sql"
	"fmt"
	"my_gql_server/graph/model"
	models "my_gql_server/my_models"
)

type TodoUseCase interface {
	CreateTodo(ctx context.Context, input model.CreateTodo) error
	GetTodoByID(ctx context.Context, id int) (*models.Todo, error)
}

type todoService struct {
	dbConnect *sql.DB
}

func NewTodoService() BookkeepingUseCase {
	connectDB, err := sql.Open("postgres", fmt.Sprintf("host=postgres dbname=%s user=%s password=%s sslmode=disable", "postgres", "postgres", "postgres"))

	if err != nil {
		panic(fmt.Errorf("connect db error"))
	}
	return &bookkeepingService{
		dbConnect: connectDB,
	}
}

func (b *bookkeepingService) CreateTodo(ctx context.Context, input model.CreateTodo) error {

	// b.dbConnect => repository layer

	return nil
}

func (b *bookkeepingService) GetTodoByID(ctx context.Context, id int) (*models.Todo, error) {
	// ビジネスロジックに従って、指定されたIDの簿記エントリを取得する処理を実装
	// データベースからデータを取得して返す
	return nil, nil
}
