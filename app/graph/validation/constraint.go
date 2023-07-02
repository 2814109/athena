package validation

import (
	"log"
	"my_gql_server/graph/validation/custom"

	"github.com/go-playground/validator/v10"
)

type CaughtValidationErrors map[string]string

func constraint(model any) (CaughtValidationErrors, error) {

	validate := validator.New()

	err := validate.RegisterValidation("newline", custom.Newline)
	if err != nil {
		log.Println("Error registering custom validation :", err.Error())
	}

	validationErrors := map[string]string{}

	if err := validate.Struct(model); err != nil {

		if _, ok := err.(*validator.InvalidValidationError); ok {
			return nil, err
		}

		errs := err.(validator.ValidationErrors)
		for _, ve := range errs {
			validationErrors[ve.StructNamespace()] = errorMessageMapper(ve)
		}

		return validationErrors, nil
	}

	return validationErrors, nil
}
