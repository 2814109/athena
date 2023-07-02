package validation

import (
	"fmt"

	"github.com/go-playground/validator/v10"
)

func errorMessageMapper(fieldError validator.FieldError) string {
	switch fieldError.Tag() {
	case "required":
		return fmt.Sprintf("%sの入力は必須です", fieldError.Field())
	case "len":
		return fmt.Sprintf("%s文字で入力してください", fieldError.Param())
	case "gte":
		return fmt.Sprintf("%s文字以上で入力してください", fieldError.Param())
	case "lte":
		return fmt.Sprintf("%s文字以下で入力してください", fieldError.Param())
	case "timezone":
		return "IANA Time Zone databaseの形式で入力してください"
	default:
		return "予期せぬエラーが発生しました"
	}
}
