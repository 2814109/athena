package dummy

import (
	"context"
	"database/sql"
	"log"

	models "my_gql_server/my_models"

	"github.com/volatiletech/sqlboiler/v4/boil"

	_ "github.com/lib/pq"

	gofakeit "github.com/brianvoe/gofakeit/v6"

	"github.com/samber/lo"

	"my_gql_server/infrastructures/dummy/libs"
)

func CreateTodos(ctx context.Context, connectDB *sql.DB) {
	itemCount := 30
	userIdList := libs.GetUserIdList(ctx, connectDB)

	lo.ForEach(userIdList, func(userId int, _ int) {
		todos := lo.Times(gofakeit.Number(0, itemCount), func(_ int) models.Todo {
			return models.Todo{
				Content: gofakeit.Word(),
				UserID:  userId,
			}
		})

		lo.ForEach(todos, func(item models.Todo, index int) {
			if err := item.Insert(ctx, connectDB, boil.Infer()); err != nil {
				log.Printf("multi insert todo for each error : %s , index is %v", err, index)
			}
		})
	})

}
