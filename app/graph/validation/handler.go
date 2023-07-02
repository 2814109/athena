package validation

import (
	"my_gql_server/graph/custom_error"

	"github.com/vektah/gqlparser/v2/gqlerror"
)

func Handler(m any) *gqlerror.Error {

	validationErrors, err := constraint(m)
	if err != nil {
		return &gqlerror.Error{
			Message:    custom_error.ErrorMessage(custom_error.InternalServerError),
			Extensions: custom_error.InternalServerErrorExtension(),
		}
	}
	if len(validationErrors) > 0 {
		return &gqlerror.Error{
			Message:    custom_error.ErrorMessage(custom_error.BadUserInput),
			Extensions: custom_error.BadUserInputExtension(validationErrors),
		}
	}
	return nil
}
