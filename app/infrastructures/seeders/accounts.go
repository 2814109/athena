package seeders

import (
	"context"
	"database/sql"
	"log"

	models "my_gql_server/models"

	"github.com/volatiletech/sqlboiler/v4/boil"

	_ "github.com/lib/pq"
)

func UpsertSeederOfAccounts(ctx context.Context, connectDB *sql.DB) {
	types := map[string][]string{
		// 資産（Assets）
		"Assets": {
			"Cash",
			"Bank Account",
			"Accounts Receivable",
			"Inventory",
			"Prepaid Expenses",
			"Equipment / Machinery",
			"Vehicles",
			"Real Estate",
			"Investments",
		},
		// 負債（Liabilities）
		"Liabilities": {
			"Loans Payable",
			"Accounts Payable",
			"Bonds Payable",
			"Tax Liabilities",
			"Accrued Expenses",
		},
		// 純資産（Equity）
		"Equity": {
			"Share Capital",
			"Additional Paid-in Capital",
			"Retained Earnings",
			"Profit Reserves",
		},
		// 収益（Revenue）
		"Revenue": {
			"Sales Revenue",
			"Service Revenue",
			"Interest Income",
			"Dividend Income",
		},
		// 費用（Expenses）
		"Expenses": {
			"Salary / Wages",
			"Advertising Expenses",
			"Cost of Goods Sold",
			"Rent Expenses",
			"Utility Expenses",
			"Transportation Expenses",
			"Taxes",
		},
		// 資産減損損失（Impairment Loss）
		"ImpairmentLoss": {
			"Accounts Receivable Impairment Loss",
			"Inventory Impairment Loss",
			"Fixed Asset Impairment Loss",
		},
	}

	for majorCategory, subCategories := range types {
		for index, subCategory := range subCategories {
			resource := models.Account{
				Name:        subCategory,
				AccountType: majorCategory,
			}

			if err := resource.Upsert(ctx, connectDB, false, nil, boil.Infer(), boil.Infer()); err != nil {
				log.Printf("error : %s , index is %v", err, index)
			}
		}
	}

}

// itemsPattern := map[string]string{
//     // 資産（Assets）
//     "Cash": "現金",
//     "Bank Account": "銀行口座",
//     "Accounts Receivable": "売掛金",
//     "Inventory": "在庫",
//     "Prepaid Expenses": "前払費用",
//     "Equipment / Machinery": "設備・機械",
//     "Vehicles": "車両",
//     "Real Estate": "不動産",
//     "Investments": "投資",
//     // 負債（Liabilities）
//     "Loans Payable": "借入金",
//     "Accounts Payable": "未払金",
//     "Bonds Payable": "社債",
//     "Tax Liabilities": "税金負担",
//     "Accrued Expenses": "未処理経費",
//     // 純資産（Equity）
//     "Share Capital": "株主資本",
//     "Additional Paid-in Capital": "資本剰余金",
//     "Retained Earnings": "利益剰余金",
//     "Profit Reserves": "利益準備金",
//     // 収益（Revenue）
//     "Sales Revenue": "売上",
//     "Service Revenue": "サービス収益",
//     "Interest Income": "利子収入",
//     "Dividend Income": "配当収入",
//     // 費用（Expenses）
//     "Salary / Wages": "給与・人件費",
//     "Advertising Expenses": "広告費",
//     "Cost of Goods Sold": "購入費用",
//     "Rent Expenses": "賃借料",
//     "Utility Expenses": "光熱費",
//     "Transportation Expenses": "交通費",
//     "Taxes": "税金",
//     // 資産減損損失（Impairment Loss）
//     "Accounts Receivable Impairment Loss": "売掛金減損損失",
//     "Inventory Impairment Loss": "在庫減損損失",
//     "Fixed Asset Impairment Loss": "固定資産減損損失",
// }
