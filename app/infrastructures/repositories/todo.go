package repositories

import (
	"context"
	"fmt"
	"log"
	"my_gql_server/graph/model"
	models "my_gql_server/my_models"

	"database/sql"

	_ "github.com/lib/pq"
	"github.com/volatiletech/sqlboiler/v4/boil"
	"github.com/volatiletech/sqlboiler/v4/queries/qm"
)

func FindAllTodoByUserId(ctx context.Context, userId int) (models.TodoSlice, error) {
	connectDB, err := sql.Open("postgres", fmt.Sprintf("host=postgres dbname=%s user=%s password=%s sslmode=disable", "postgres", "postgres", "postgres"))

	if err != nil {
		return nil, err
	}

	todos, modelErr := models.Todos(qm.Load(models.TodoRels.User), models.TodoWhere.UserID.EQ(userId)).All(ctx, connectDB)

	if modelErr != nil {
		log.Print("error of modelErr")
		return nil, modelErr
	}
	return todos, nil
}

func InsertTodo(ctx context.Context, input model.NewTodo) (*models.Todo, error) {
	connectDB, err := sql.Open("postgres", fmt.Sprintf("host=postgres dbname=%s user=%s password=%s sslmode=disable", "postgres", "postgres", "postgres"))

	if err != nil {
		return nil, err
	}

	insertTodoResource := &models.Todo{
		Content: input.Text,
		UserID:  input.UserID,
	}

	if err := insertTodoResource.Insert(ctx, connectDB, boil.Infer()); err != nil {
		return nil, err
	}

	if err := insertTodoResource.Reload(ctx, connectDB); err != nil {
		return nil, err
	}

	return insertTodoResource, nil

}
