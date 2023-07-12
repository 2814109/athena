// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

import (
	"fmt"
	"io"
	"my_gql_server/my_models"
	"strconv"
)

type Item struct {
	ID           string       `json:"id"`
	Label        string       `json:"label"`
	CategoryName string       `json:"categoryName"`
	Const        int          `json:"const"`
	User         *models.User `json:"user,omitempty"`
}

type NewTodo struct {
	Status *StatusPattern `json:"status,omitempty"`
	Text   string         `json:"text" validate:"required_if=Status ACTIVE,newline,omitempty"`
	UserID string         `json:"userId"`
}

type NewUser struct {
	Name string `json:"name"`
}

type ArticleStatuses string

const (
	ArticleStatusesDraft       ArticleStatuses = "Draft"
	ArticleStatusesUnderReview ArticleStatuses = "UnderReview"
	ArticleStatusesPublished   ArticleStatuses = "Published"
	ArticleStatusesDeleted     ArticleStatuses = "Deleted"
	ArticleStatusesOnHold      ArticleStatuses = "OnHold"
)

var AllArticleStatuses = []ArticleStatuses{
	ArticleStatusesDraft,
	ArticleStatusesUnderReview,
	ArticleStatusesPublished,
	ArticleStatusesDeleted,
	ArticleStatusesOnHold,
}

func (e ArticleStatuses) IsValid() bool {
	switch e {
	case ArticleStatusesDraft, ArticleStatusesUnderReview, ArticleStatusesPublished, ArticleStatusesDeleted, ArticleStatusesOnHold:
		return true
	}
	return false
}

func (e ArticleStatuses) String() string {
	return string(e)
}

func (e *ArticleStatuses) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = ArticleStatuses(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid ArticleStatuses", str)
	}
	return nil
}

func (e ArticleStatuses) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type StatusPattern string

const (
	StatusPatternActive   StatusPattern = "ACTIVE"
	StatusPatternInactive StatusPattern = "INACTIVE"
	StatusPatternPending  StatusPattern = "PENDING"
)

var AllStatusPattern = []StatusPattern{
	StatusPatternActive,
	StatusPatternInactive,
	StatusPatternPending,
}

func (e StatusPattern) IsValid() bool {
	switch e {
	case StatusPatternActive, StatusPatternInactive, StatusPatternPending:
		return true
	}
	return false
}

func (e StatusPattern) String() string {
	return string(e)
}

func (e *StatusPattern) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = StatusPattern(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid StatusPattern", str)
	}
	return nil
}

func (e StatusPattern) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}
