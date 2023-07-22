package usecases

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"my_gql_server/graph/model"
	models "my_gql_server/my_models"
)

type BookkeepingUseCase interface {
	CreateEntry(ctx context.Context, input model.CreateEntryRequest) error
	GetEntryByID(ctx context.Context, id int) (*models.Entry, error)
}

type bookkeepingService struct {
	dbConnect *sql.DB
}

func NewBookkeepingService() BookkeepingUseCase {
	connectDB, err := sql.Open("postgres", fmt.Sprintf("host=postgres dbname=%s user=%s password=%s sslmode=disable", "postgres", "postgres", "postgres"))

	if err != nil {
		panic(fmt.Errorf("connect db error"))
	}
	return &bookkeepingService{
		dbConnect: connectDB,
	}
}

func (b *bookkeepingService) CreateEntry(ctx context.Context, input model.CreateEntryRequest) error {
	if len(input.Debits) == 0 || len(input.Credits) == 0 {
		return errors.New("at least one debit and one credit are required")
	}

	// b.dbConnect => repository layer

	// ビジネスロジックに従って、データベースへのエントリ登録とバランスチェックなどの処理を実装
	// トランザクションを使って、借方と貸方の合計が等しいことを確認するなど

	return nil
}

func (b *bookkeepingService) GetEntryByID(ctx context.Context, id int) (*models.Entry, error) {
	// ビジネスロジックに従って、指定されたIDの簿記エントリを取得する処理を実装
	// データベースからデータを取得して返す
	return nil, nil
}
