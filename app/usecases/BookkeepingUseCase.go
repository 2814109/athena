package usecases

import (
	"context"
	"errors"
	"my_gql_server/graph/model"
)

type BookkeepingUseCase interface {
	CreateEntry(ctx context.Context, input model.CreateEntryRequest) error
	// GetEntryByID(id int) (*Entry, error)
}

type bookkeepingService struct {
	// データベースへのアクセスや他の依存関係が必要な場合はここに追加
}

// type Entry struct {
// 	ID          int
// 	Description string
// 	Date        time.Time
// 	Debits      []Debit
// 	Credits     []Credit
// }

// type Debit struct {
// 	AccountName string
// 	Amount      float64
// }

// type Credit struct {
// 	AccountName string
// 	Amount      float64
// }

func NewBookkeepingService() BookkeepingUseCase {
	return &bookkeepingService{}
}

func (b *bookkeepingService) CreateEntry(ctx context.Context, input model.CreateEntryRequest) error {
	if len(input.Debits) == 0 || len(input.Credits) == 0 {
		return errors.New("at least one debit and one credit are required")
	}

	// ビジネスロジックに従って、データベースへのエントリ登録とバランスチェックなどの処理を実装
	// トランザクションを使って、借方と貸方の合計が等しいことを確認するなど

	return nil
}

// func (b *bookkeepingService) GetEntryByID(id int) (*Entry, error) {
// 	// ビジネスロジックに従って、指定されたIDの簿記エントリを取得する処理を実装
// 	// データベースからデータを取得して返す
// 	return nil, nil
// }
