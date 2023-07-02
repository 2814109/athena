package custom

import (
	"log"
	"strings"

	"github.com/go-playground/validator/v10"
)

func Newline(field validator.FieldLevel) bool {
	log.Printf("input log : %s", field.Field().String())
	return !strings.Contains(field.Field().String(), "\n")
}
