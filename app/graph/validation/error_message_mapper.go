package validation

import (
	"fmt"
	"log"

	"github.com/go-playground/validator/v10"
)

func errorMessageMapper(fieldError validator.FieldError) string {

	log.Printf("error tag is %s", fieldError.Tag())
	switch fieldError.Tag() {
	case "required":
		return fmt.Sprintf("%sの入力は必須です", fieldError.Field())
	case "required_if":
		return fmt.Sprintf("%sの入力は必須です", fieldError.Field())
	case "len":
		return fmt.Sprintf("%s文字で入力してください", fieldError.Param())
	case "gte":
		return fmt.Sprintf("%s文字以上で入力してください", fieldError.Param())
	case "lte":
		return fmt.Sprintf("%s文字以下で入力してください", fieldError.Param())
	case "timezone":
		return "IANA Time Zone databaseの形式で入力してください"
	case "newline":
		return fmt.Sprintf("%sに改行コードを含めることはできません", fieldError.Field())
	default:
		return fmt.Sprintf("項目%sにエラーコード:%sが発生しました", fieldError.Field(), fieldError.Tag())
	}
}
