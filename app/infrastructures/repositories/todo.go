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

func (repository *repository) FindAllTodoByUserId(ctx context.Context, userId int) (models.TodoSlice, error) {
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

func (repository *repository) CreateTodo(ctx context.Context, input model.CreateTodo) (*models.Todo, error) {
	connectDB, err := sql.Open("postgres", fmt.Sprintf("host=postgres dbname=%s user=%s password=%s sslmode=disable", "postgres", "postgres", "postgres"))

	if err != nil {
		return nil, err
	}

	todoResource := &models.Todo{
		Content: input.Text,
		UserID:  input.UserID,
	}

	if err := todoResource.Insert(ctx, connectDB, boil.Infer()); err != nil {
		return nil, err
	}

	if err := todoResource.Reload(ctx, connectDB); err != nil {
		return nil, err
	}

	return todoResource, nil

}

func (repository *repository) UpdateTodo(ctx context.Context, input model.UpdateTodo) (*models.Todo, error) {
	connectDB, err := sql.Open("postgres", fmt.Sprintf("host=postgres dbname=%s user=%s password=%s sslmode=disable", "postgres", "postgres", "postgres"))

	if err != nil {
		return nil, err
	}

	todoResource := &models.Todo{
		ID:      input.ID,
		Content: input.Text,
		UserID:  input.UserID,
	}

	id, err := todoResource.Update(ctx, connectDB, boil.Infer())
	log.Printf("id value is %v", id)
	if err != nil {
		return nil, err
	}
	if err := todoResource.Reload(ctx, connectDB); err != nil {
		return nil, err
	}
	return todoResource, nil
}

func (repository *repository) FindTodoByID(ctx context.Context, ID int) (*models.Todo, error) {
	connectDB, err := sql.Open("postgres", fmt.Sprintf("host=postgres dbname=%s user=%s password=%s sslmode=disable", "postgres", "postgres", "postgres"))

	if err != nil {
		return nil, err
	}

	todo, modelErr := models.Todos(qm.Load(models.TodoRels.User), models.TodoWhere.ID.EQ(ID)).One(ctx, connectDB)

	if modelErr != nil {
		log.Print("error of modelErr")
		return nil, modelErr
	}
	return todo, nil
}
