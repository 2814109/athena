package repositories

import (
	"context"
	"fmt"
	"log"
	models "my_gql_server/my_models"

	"database/sql"

	_ "github.com/lib/pq"
	"github.com/volatiletech/sqlboiler/v4/queries/qm"
)

func FindAllTodo(ctx context.Context) (models.TodoSlice, error) {
	connectDB, err := sql.Open("postgres", fmt.Sprintf("host=postgres dbname=%s user=%s password=%s sslmode=disable", "postgres", "postgres", "postgres"))

	if err != nil {
		return nil, err
	}
	todos, modelErr := models.Todos(qm.Load(models.TodoRels.User)).All(ctx, connectDB)

	if modelErr != nil {
		log.Print("error of modelErr")
		return nil, modelErr
	}
	return todos, nil
}
