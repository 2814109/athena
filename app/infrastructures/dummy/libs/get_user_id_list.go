package libs

import (
	"context"
	"database/sql"
	"log"

	_ "github.com/lib/pq"

	models "my_gql_server/my_models"

	lop "github.com/samber/lo/parallel"
)

func GetUserIdList(ctx context.Context, connectDB *sql.DB) []int {

	users, err := models.Users().All(ctx, connectDB)
	if err != nil {
		log.Printf("error : %s", err)
	}

	userIdList := lop.Map(users, func(user *models.User, _ int) int {
		return user.ID
	})

	return userIdList

}
