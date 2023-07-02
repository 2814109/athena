package validation

import (
	"github.com/go-playground/validator/v10"
)

type CaughtValidationErrors map[string]string

func constraint(model any) (CaughtValidationErrors, error) {

	validate := validator.New()

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
