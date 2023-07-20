package dummies

import (
	"context"
	"database/sql"
	"log"

	models "my_gql_server/my_models"

	"github.com/volatiletech/sqlboiler/v4/boil"

	_ "github.com/lib/pq"

	gofakeit "github.com/brianvoe/gofakeit/v6"

	"github.com/samber/lo"
)

func CreateDummyUsers(ctx context.Context, connectDB *sql.DB) {
	count := 100

	users := lo.Times(count, func(i int) models.User {
		return models.User{
			Username: gofakeit.Username(),
			Password: gofakeit.Password(false, false, false, false, false, 8),
			Email:    gofakeit.Email()}
	})

	lo.ForEach(users, func(user models.User, index int) {
		if err := user.Insert(ctx, connectDB, boil.Infer()); err != nil {
			log.Printf("multi insert article for each error : %s , index is %v", err, index)
		}
	})

}
