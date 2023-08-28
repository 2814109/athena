package seeders

import (
	"context"
	"database/sql"
	"log"

	models "my_gql_server/models"

	"github.com/volatiletech/sqlboiler/v4/boil"

	_ "github.com/lib/pq"

	"github.com/samber/lo"

	lop "github.com/samber/lo/parallel"
)

func UpsertSeederOfCategories(ctx context.Context, connectDB *sql.DB) {
	itemsPattarn := []string{"食料品", "住居費", "水道光熱費", "交通費", "通信費", "教育費", "医療費", "娯楽費", "衣料品", "被服費", "日用品", "その他の費用"}

	categoriesModel := lop.Map(itemsPattarn, func(item string, _ int) models.Category {
		return models.Category{
			Classification: item,
		}
	})
	lo.ForEach(categoriesModel, func(category models.Category, index int) {
		if err := category.Upsert(ctx, connectDB, true, []string{"classification"}, boil.Whitelist("classification"), boil.Infer()); err != nil {
			log.Printf("error : %s , index is %v", err, index)
		}
	})
}
