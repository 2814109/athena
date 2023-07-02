package validation

import (
	"log"
	"my_gql_server/graph/custom_error"

	"github.com/vektah/gqlparser/v2/gqlerror"
)

func Handler(m any) *gqlerror.Error {
	log.Print("exec handler")

	validationErrors, err := constraint(m)
	log.Print("constraint run")

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
