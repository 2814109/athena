package usecases

import (
	"context"
	"errors"
	"my_gql_server/graph/model"
	models "my_gql_server/my_models"
)

type BookkeepingUseCase interface {
	CreateEntry(ctx context.Context, input model.CreateEntryRequest) error
	GetEntryByID(ctx context.Context, id int) (*models.Entry, error)
}

type bookkeepingService struct {
	// r *repositories
}

func NewBookkeepingService() BookkeepingUseCase {
	// TODO instance for repository
	return &bookkeepingService{}
}

func (b *bookkeepingService) CreateEntry(ctx context.Context, input model.CreateEntryRequest) error {
	if len(input.Debits) == 0 || len(input.Credits) == 0 {
		return errors.New("at least one debit and one credit are required")
	}

	// b.dbConnect => repository layer

	// def transaction entry, debit, credit

	// ビジネスロジックに従って、データベースへのエントリ登録とバランスチェックなどの処理を実装
	// トランザクションを使って、借方と貸方の合計が等しいことを確認するなど

	return nil
}

func (b *bookkeepingService) GetEntryByID(ctx context.Context, id int) (*models.Entry, error) {
	// ビジネスロジックに従って、指定されたIDの簿記エントリを取得する処理を実装
	// データベースからデータを取得して返す
	return nil, nil
}
