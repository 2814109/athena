package validation

import (
	"github.com/go-playground/validator/v10"
)

func constraint(model any) (map[string]string, error) {
	validate := validator.New()

	if err := validate.Struct(model); err != nil {
		if _, ok := err.(*validator.InvalidValidationError); ok {
			return nil, err
		}

		errs := err.(validator.ValidationErrors)
		validationErrors := make(map[string]string, len(errs))
		for _, ve := range errs {
			validationErrors[ve.StructNamespace()] = errorMessageMapper(ve)
		}

		return validationErrors, nil
	}
	return nil, nil
}
