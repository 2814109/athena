package presentations

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.31

import (
	"context"
	"fmt"
	"log"
	"my_gql_server/graph"
	"my_gql_server/graph/model"
	"my_gql_server/graph/validation"
	"my_gql_server/infrastructures/repositories"
	"my_gql_server/models"
	"my_gql_server/usecases"
)

// CreateTodo is the resolver for the createTodo field.
func (r *mutationResolver) CreateTodo(ctx context.Context, input model.CreateTodo) (*models.Todo, error) {
	if err := validation.Handler(input); err != nil {
		return nil, err
	}
	log.Print("run exec create todo")

	repository := repositories.NewRepository()
	todo, err := repository.CreateTodo(ctx, input)

	if err != nil {
		return nil, err
	}

	return todo, nil
}

// UpdateTodo is the resolver for the updateTodo field.
func (r *mutationResolver) UpdateTodo(ctx context.Context, input model.UpdateTodo) (*models.Todo, error) {
	if err := validation.Handler(input); err != nil {
		return nil, err
	}
	log.Print("run exec update todo")
	repository := repositories.NewRepository()
	todo, err := repository.UpdateTodo(ctx, input)

	if err != nil {
		return nil, err
	}

	return todo, nil
}

// CreateUser is the resolver for the createUser field.
func (r *mutationResolver) CreateUser(ctx context.Context, input model.NewUser) (*models.User, error) {
	if err := validation.Handler(input); err != nil {
		return nil, err
	}
	return nil, nil
}

// CreateEnty is the resolver for the createEnty field.
func (r *mutationResolver) CreateEnty(ctx context.Context, input model.CreateEntryRequest) (*models.Entry, error) {
	bookkeepingUseCase := usecases.NewBookkeepingService()

	err := bookkeepingUseCase.CreateEntry(ctx, input)
	if err != nil {
		return nil, err
	}
	return nil, nil
}

// CreatePredictCost is the resolver for the createPredictCost field.
func (r *mutationResolver) CreatePredictCost(ctx context.Context, input model.CreatePredictCost) (*models.PredictCost, error) {
	predictCostUsecase := usecases.NewPredictCostService()
	result, err := predictCostUsecase.CreatePredictCost(ctx, input)

	if err != nil {
		return nil, err
	}

	return result, nil
}

// DeletePredictCost is the resolver for the deletePredictCost field.
func (r *mutationResolver) DeletePredictCost(ctx context.Context, predictCostID int) (bool, error) {
	predictCostUsecase := usecases.NewPredictCostService()
	result, err := predictCostUsecase.DeletePredictCost(ctx, predictCostID)

	if err != nil {
		return false, err
	}

	return result, nil
}

// CreatePayment is the resolver for the createPayment field.
func (r *mutationResolver) CreatePayment(ctx context.Context, input model.CreatePayment) (*models.Payment, error) {
	usecase := usecases.NewPaymentService()
	result, err := usecase.Create(ctx, input)

	if err != nil {
		return nil, err
	}

	return result, nil
}

// DeletePayment is the resolver for the deletePayment field.
func (r *mutationResolver) DeletePayment(ctx context.Context, paymentID int) (bool, error) {
	usecase := usecases.NewPaymentService()
	result, err := usecase.DeletePayment(ctx, paymentID)

	if err != nil {
		return false, err
	}

	return result, nil
}

// CreateIncome is the resolver for the createIncome field.
func (r *mutationResolver) CreateIncome(ctx context.Context, input model.CreateIncome) (bool, error) {
	panic(fmt.Errorf("not implemented: CreateIncome - createIncome"))
}

// Mutation returns graph.MutationResolver implementation.
func (r *Resolver) Mutation() graph.MutationResolver { return &mutationResolver{r} }

type mutationResolver struct{ *Resolver }
