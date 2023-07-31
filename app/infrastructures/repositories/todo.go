package repositories

import (
	"context"
	"log"
	"my_gql_server/graph/model"
	models "my_gql_server/models"

	_ "github.com/lib/pq"
	"github.com/volatiletech/sqlboiler/v4/boil"
	"github.com/volatiletech/sqlboiler/v4/queries/qm"
)

func (repository *repository) FindAllTodoByUserId(ctx context.Context, userId int) (models.TodoSlice, error) {
	todos, modelErr := models.Todos(qm.Load(models.TodoRels.User), models.TodoWhere.UserID.EQ(userId)).AllG(ctx)
	if modelErr != nil {
		log.Print("error of modelErr")
		return nil, modelErr
	}
	return todos, nil
}

func (repository *repository) CreateTodo(ctx context.Context, input model.CreateTodo) (*models.Todo, error) {
	resource := &models.Todo{
		Content: input.Text,
		UserID:  input.UserID,
	}

	if err := resource.InsertG(ctx, boil.Infer()); err != nil {
		return nil, err
	}

	if err := resource.ReloadG(ctx); err != nil {
		return nil, err
	}

	return resource, nil

}

func (repository *repository) UpdateTodo(ctx context.Context, input model.UpdateTodo) (*models.Todo, error) {
	resource := &models.Todo{
		ID:      input.ID,
		Content: input.Text,
		UserID:  input.UserID,
	}
	_, err := resource.UpdateG(ctx, boil.Infer())
	if err != nil {
		return nil, err
	}
	if err := resource.ReloadG(ctx); err != nil {
		return nil, err
	}
	return resource, nil
}

func (repository *repository) FindTodoByID(ctx context.Context, ID int) (*models.Todo, error) {
	todo, modelErr := models.Todos(qm.Load(models.TodoRels.User), models.TodoWhere.ID.EQ(ID)).OneG(ctx)
	if modelErr != nil {
		log.Print("error of modelErr")
		return nil, modelErr
	}
	return todo, nil
}
