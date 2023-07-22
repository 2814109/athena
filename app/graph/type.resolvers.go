package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.31

import (
	"context"
	"fmt"
	"log"
	"my_gql_server/my_models"
)

// Amount is the resolver for the amount field.
func (r *creditResolver) Amount(ctx context.Context, obj *models.Credit) (*float64, error) {
	panic(fmt.Errorf("not implemented: Amount - amount"))
}

// Amount is the resolver for the amount field.
func (r *debitResolver) Amount(ctx context.Context, obj *models.Debit) (*float64, error) {
	panic(fmt.Errorf("not implemented: Amount - amount"))
}

// Date is the resolver for the date field.
func (r *entryResolver) Date(ctx context.Context, obj *models.Entry) (string, error) {
	panic(fmt.Errorf("not implemented: Date - date"))
}

// Debits is the resolver for the debits field.
func (r *entryResolver) Debits(ctx context.Context, obj *models.Entry) ([]*models.Debit, error) {
	panic(fmt.Errorf("not implemented: Debits - debits"))
}

// Credits is the resolver for the credits field.
func (r *entryResolver) Credits(ctx context.Context, obj *models.Entry) ([]*models.Credit, error) {
	panic(fmt.Errorf("not implemented: Credits - credits"))
}

// CreatedAt is the resolver for the createdAt field.
func (r *itemResolver) CreatedAt(ctx context.Context, obj *models.Item) (string, error) {
	panic(fmt.Errorf("not implemented: CreatedAt - createdAt"))
}

// UpdatedAt is the resolver for the updatedAt field.
func (r *itemResolver) UpdatedAt(ctx context.Context, obj *models.Item) (string, error) {
	panic(fmt.Errorf("not implemented: UpdatedAt - updatedAt"))
}

// User is the resolver for the user field.
func (r *itemResolver) User(ctx context.Context, obj *models.Item) (*models.User, error) {
	return obj.R.User, nil
}

// User is the resolver for the user field.
func (r *todoResolver) User(ctx context.Context, obj *models.Todo) (*models.User, error) {
	log.Printf("user %s", obj.R.User.Email)
	return obj.R.User, nil
}

// Credit returns CreditResolver implementation.
func (r *Resolver) Credit() CreditResolver { return &creditResolver{r} }

// Debit returns DebitResolver implementation.
func (r *Resolver) Debit() DebitResolver { return &debitResolver{r} }

// Entry returns EntryResolver implementation.
func (r *Resolver) Entry() EntryResolver { return &entryResolver{r} }

// Item returns ItemResolver implementation.
func (r *Resolver) Item() ItemResolver { return &itemResolver{r} }

// Todo returns TodoResolver implementation.
func (r *Resolver) Todo() TodoResolver { return &todoResolver{r} }

type creditResolver struct{ *Resolver }
type debitResolver struct{ *Resolver }
type entryResolver struct{ *Resolver }
type itemResolver struct{ *Resolver }
type todoResolver struct{ *Resolver }
