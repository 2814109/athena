// Code generated by SQLBoiler 4.14.2 (https://github.com/volatiletech/sqlboiler). DO NOT EDIT.
// This file is meant to be re-generated in place and/or deleted at any time.

package models

import (
	"context"
	"database/sql"
	"fmt"
	"reflect"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/friendsofgo/errors"
	"github.com/volatiletech/sqlboiler/v4/boil"
	"github.com/volatiletech/sqlboiler/v4/queries"
	"github.com/volatiletech/sqlboiler/v4/queries/qm"
	"github.com/volatiletech/sqlboiler/v4/queries/qmhelper"
	"github.com/volatiletech/strmangle"
)

// Income is an object representing the database table.
type Income struct {
	ID        int       `boil:"id" json:"id" toml:"id" yaml:"id"`
	Label     string    `boil:"label" json:"label" toml:"label" yaml:"label"`
	IncomeAt  time.Time `boil:"income_at" json:"income_at" toml:"income_at" yaml:"income_at"`
	CreatedAt time.Time `boil:"created_at" json:"created_at" toml:"created_at" yaml:"created_at"`
	UpdatedAt time.Time `boil:"updated_at" json:"updated_at" toml:"updated_at" yaml:"updated_at"`
	UserID    int       `boil:"user_id" json:"user_id" toml:"user_id" yaml:"user_id"`
	Amount    int       `boil:"amount" json:"amount" toml:"amount" yaml:"amount"`

	R *incomeR `boil:"-" json:"-" toml:"-" yaml:"-"`
	L incomeL  `boil:"-" json:"-" toml:"-" yaml:"-"`
}

var IncomeColumns = struct {
	ID        string
	Label     string
	IncomeAt  string
	CreatedAt string
	UpdatedAt string
	UserID    string
	Amount    string
}{
	ID:        "id",
	Label:     "label",
	IncomeAt:  "income_at",
	CreatedAt: "created_at",
	UpdatedAt: "updated_at",
	UserID:    "user_id",
	Amount:    "amount",
}

var IncomeTableColumns = struct {
	ID        string
	Label     string
	IncomeAt  string
	CreatedAt string
	UpdatedAt string
	UserID    string
	Amount    string
}{
	ID:        "incomes.id",
	Label:     "incomes.label",
	IncomeAt:  "incomes.income_at",
	CreatedAt: "incomes.created_at",
	UpdatedAt: "incomes.updated_at",
	UserID:    "incomes.user_id",
	Amount:    "incomes.amount",
}

// Generated where

var IncomeWhere = struct {
	ID        whereHelperint
	Label     whereHelperstring
	IncomeAt  whereHelpertime_Time
	CreatedAt whereHelpertime_Time
	UpdatedAt whereHelpertime_Time
	UserID    whereHelperint
	Amount    whereHelperint
}{
	ID:        whereHelperint{field: "\"incomes\".\"id\""},
	Label:     whereHelperstring{field: "\"incomes\".\"label\""},
	IncomeAt:  whereHelpertime_Time{field: "\"incomes\".\"income_at\""},
	CreatedAt: whereHelpertime_Time{field: "\"incomes\".\"created_at\""},
	UpdatedAt: whereHelpertime_Time{field: "\"incomes\".\"updated_at\""},
	UserID:    whereHelperint{field: "\"incomes\".\"user_id\""},
	Amount:    whereHelperint{field: "\"incomes\".\"amount\""},
}

// IncomeRels is where relationship names are stored.
var IncomeRels = struct {
	User string
}{
	User: "User",
}

// incomeR is where relationships are stored.
type incomeR struct {
	User *User `boil:"User" json:"User" toml:"User" yaml:"User"`
}

// NewStruct creates a new relationship struct
func (*incomeR) NewStruct() *incomeR {
	return &incomeR{}
}

func (r *incomeR) GetUser() *User {
	if r == nil {
		return nil
	}
	return r.User
}

// incomeL is where Load methods for each relationship are stored.
type incomeL struct{}

var (
	incomeAllColumns            = []string{"id", "label", "income_at", "created_at", "updated_at", "user_id", "amount"}
	incomeColumnsWithoutDefault = []string{"label", "income_at", "created_at", "updated_at", "amount"}
	incomeColumnsWithDefault    = []string{"id", "user_id"}
	incomePrimaryKeyColumns     = []string{"id"}
	incomeGeneratedColumns      = []string{}
)

type (
	// IncomeSlice is an alias for a slice of pointers to Income.
	// This should almost always be used instead of []Income.
	IncomeSlice []*Income
	// IncomeHook is the signature for custom Income hook methods
	IncomeHook func(context.Context, boil.ContextExecutor, *Income) error

	incomeQuery struct {
		*queries.Query
	}
)

// Cache for insert, update and upsert
var (
	incomeType                 = reflect.TypeOf(&Income{})
	incomeMapping              = queries.MakeStructMapping(incomeType)
	incomePrimaryKeyMapping, _ = queries.BindMapping(incomeType, incomeMapping, incomePrimaryKeyColumns)
	incomeInsertCacheMut       sync.RWMutex
	incomeInsertCache          = make(map[string]insertCache)
	incomeUpdateCacheMut       sync.RWMutex
	incomeUpdateCache          = make(map[string]updateCache)
	incomeUpsertCacheMut       sync.RWMutex
	incomeUpsertCache          = make(map[string]insertCache)
)

var (
	// Force time package dependency for automated UpdatedAt/CreatedAt.
	_ = time.Second
	// Force qmhelper dependency for where clause generation (which doesn't
	// always happen)
	_ = qmhelper.Where
)

var incomeAfterSelectHooks []IncomeHook

var incomeBeforeInsertHooks []IncomeHook
var incomeAfterInsertHooks []IncomeHook

var incomeBeforeUpdateHooks []IncomeHook
var incomeAfterUpdateHooks []IncomeHook

var incomeBeforeDeleteHooks []IncomeHook
var incomeAfterDeleteHooks []IncomeHook

var incomeBeforeUpsertHooks []IncomeHook
var incomeAfterUpsertHooks []IncomeHook

// doAfterSelectHooks executes all "after Select" hooks.
func (o *Income) doAfterSelectHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range incomeAfterSelectHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// doBeforeInsertHooks executes all "before insert" hooks.
func (o *Income) doBeforeInsertHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range incomeBeforeInsertHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// doAfterInsertHooks executes all "after Insert" hooks.
func (o *Income) doAfterInsertHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range incomeAfterInsertHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// doBeforeUpdateHooks executes all "before Update" hooks.
func (o *Income) doBeforeUpdateHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range incomeBeforeUpdateHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// doAfterUpdateHooks executes all "after Update" hooks.
func (o *Income) doAfterUpdateHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range incomeAfterUpdateHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// doBeforeDeleteHooks executes all "before Delete" hooks.
func (o *Income) doBeforeDeleteHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range incomeBeforeDeleteHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// doAfterDeleteHooks executes all "after Delete" hooks.
func (o *Income) doAfterDeleteHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range incomeAfterDeleteHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// doBeforeUpsertHooks executes all "before Upsert" hooks.
func (o *Income) doBeforeUpsertHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range incomeBeforeUpsertHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// doAfterUpsertHooks executes all "after Upsert" hooks.
func (o *Income) doAfterUpsertHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range incomeAfterUpsertHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// AddIncomeHook registers your hook function for all future operations.
func AddIncomeHook(hookPoint boil.HookPoint, incomeHook IncomeHook) {
	switch hookPoint {
	case boil.AfterSelectHook:
		incomeAfterSelectHooks = append(incomeAfterSelectHooks, incomeHook)
	case boil.BeforeInsertHook:
		incomeBeforeInsertHooks = append(incomeBeforeInsertHooks, incomeHook)
	case boil.AfterInsertHook:
		incomeAfterInsertHooks = append(incomeAfterInsertHooks, incomeHook)
	case boil.BeforeUpdateHook:
		incomeBeforeUpdateHooks = append(incomeBeforeUpdateHooks, incomeHook)
	case boil.AfterUpdateHook:
		incomeAfterUpdateHooks = append(incomeAfterUpdateHooks, incomeHook)
	case boil.BeforeDeleteHook:
		incomeBeforeDeleteHooks = append(incomeBeforeDeleteHooks, incomeHook)
	case boil.AfterDeleteHook:
		incomeAfterDeleteHooks = append(incomeAfterDeleteHooks, incomeHook)
	case boil.BeforeUpsertHook:
		incomeBeforeUpsertHooks = append(incomeBeforeUpsertHooks, incomeHook)
	case boil.AfterUpsertHook:
		incomeAfterUpsertHooks = append(incomeAfterUpsertHooks, incomeHook)
	}
}

// OneG returns a single income record from the query using the global executor.
func (q incomeQuery) OneG(ctx context.Context) (*Income, error) {
	return q.One(ctx, boil.GetContextDB())
}

// One returns a single income record from the query.
func (q incomeQuery) One(ctx context.Context, exec boil.ContextExecutor) (*Income, error) {
	o := &Income{}

	queries.SetLimit(q.Query, 1)

	err := q.Bind(ctx, exec, o)
	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return nil, sql.ErrNoRows
		}
		return nil, errors.Wrap(err, "models: failed to execute a one query for incomes")
	}

	if err := o.doAfterSelectHooks(ctx, exec); err != nil {
		return o, err
	}

	return o, nil
}

// AllG returns all Income records from the query using the global executor.
func (q incomeQuery) AllG(ctx context.Context) (IncomeSlice, error) {
	return q.All(ctx, boil.GetContextDB())
}

// All returns all Income records from the query.
func (q incomeQuery) All(ctx context.Context, exec boil.ContextExecutor) (IncomeSlice, error) {
	var o []*Income

	err := q.Bind(ctx, exec, &o)
	if err != nil {
		return nil, errors.Wrap(err, "models: failed to assign all query results to Income slice")
	}

	if len(incomeAfterSelectHooks) != 0 {
		for _, obj := range o {
			if err := obj.doAfterSelectHooks(ctx, exec); err != nil {
				return o, err
			}
		}
	}

	return o, nil
}

// CountG returns the count of all Income records in the query using the global executor
func (q incomeQuery) CountG(ctx context.Context) (int64, error) {
	return q.Count(ctx, boil.GetContextDB())
}

// Count returns the count of all Income records in the query.
func (q incomeQuery) Count(ctx context.Context, exec boil.ContextExecutor) (int64, error) {
	var count int64

	queries.SetSelect(q.Query, nil)
	queries.SetCount(q.Query)

	err := q.Query.QueryRowContext(ctx, exec).Scan(&count)
	if err != nil {
		return 0, errors.Wrap(err, "models: failed to count incomes rows")
	}

	return count, nil
}

// ExistsG checks if the row exists in the table using the global executor.
func (q incomeQuery) ExistsG(ctx context.Context) (bool, error) {
	return q.Exists(ctx, boil.GetContextDB())
}

// Exists checks if the row exists in the table.
func (q incomeQuery) Exists(ctx context.Context, exec boil.ContextExecutor) (bool, error) {
	var count int64

	queries.SetSelect(q.Query, nil)
	queries.SetCount(q.Query)
	queries.SetLimit(q.Query, 1)

	err := q.Query.QueryRowContext(ctx, exec).Scan(&count)
	if err != nil {
		return false, errors.Wrap(err, "models: failed to check if incomes exists")
	}

	return count > 0, nil
}

// User pointed to by the foreign key.
func (o *Income) User(mods ...qm.QueryMod) userQuery {
	queryMods := []qm.QueryMod{
		qm.Where("\"id\" = ?", o.UserID),
	}

	queryMods = append(queryMods, mods...)

	return Users(queryMods...)
}

// LoadUser allows an eager lookup of values, cached into the
// loaded structs of the objects. This is for an N-1 relationship.
func (incomeL) LoadUser(ctx context.Context, e boil.ContextExecutor, singular bool, maybeIncome interface{}, mods queries.Applicator) error {
	var slice []*Income
	var object *Income

	if singular {
		var ok bool
		object, ok = maybeIncome.(*Income)
		if !ok {
			object = new(Income)
			ok = queries.SetFromEmbeddedStruct(&object, &maybeIncome)
			if !ok {
				return errors.New(fmt.Sprintf("failed to set %T from embedded struct %T", object, maybeIncome))
			}
		}
	} else {
		s, ok := maybeIncome.(*[]*Income)
		if ok {
			slice = *s
		} else {
			ok = queries.SetFromEmbeddedStruct(&slice, maybeIncome)
			if !ok {
				return errors.New(fmt.Sprintf("failed to set %T from embedded struct %T", slice, maybeIncome))
			}
		}
	}

	args := make([]interface{}, 0, 1)
	if singular {
		if object.R == nil {
			object.R = &incomeR{}
		}
		args = append(args, object.UserID)

	} else {
	Outer:
		for _, obj := range slice {
			if obj.R == nil {
				obj.R = &incomeR{}
			}

			for _, a := range args {
				if a == obj.UserID {
					continue Outer
				}
			}

			args = append(args, obj.UserID)

		}
	}

	if len(args) == 0 {
		return nil
	}

	query := NewQuery(
		qm.From(`users`),
		qm.WhereIn(`users.id in ?`, args...),
	)
	if mods != nil {
		mods.Apply(query)
	}

	results, err := query.QueryContext(ctx, e)
	if err != nil {
		return errors.Wrap(err, "failed to eager load User")
	}

	var resultSlice []*User
	if err = queries.Bind(results, &resultSlice); err != nil {
		return errors.Wrap(err, "failed to bind eager loaded slice User")
	}

	if err = results.Close(); err != nil {
		return errors.Wrap(err, "failed to close results of eager load for users")
	}
	if err = results.Err(); err != nil {
		return errors.Wrap(err, "error occurred during iteration of eager loaded relations for users")
	}

	if len(userAfterSelectHooks) != 0 {
		for _, obj := range resultSlice {
			if err := obj.doAfterSelectHooks(ctx, e); err != nil {
				return err
			}
		}
	}

	if len(resultSlice) == 0 {
		return nil
	}

	if singular {
		foreign := resultSlice[0]
		object.R.User = foreign
		if foreign.R == nil {
			foreign.R = &userR{}
		}
		foreign.R.Incomes = append(foreign.R.Incomes, object)
		return nil
	}

	for _, local := range slice {
		for _, foreign := range resultSlice {
			if local.UserID == foreign.ID {
				local.R.User = foreign
				if foreign.R == nil {
					foreign.R = &userR{}
				}
				foreign.R.Incomes = append(foreign.R.Incomes, local)
				break
			}
		}
	}

	return nil
}

// SetUserG of the income to the related item.
// Sets o.R.User to related.
// Adds o to related.R.Incomes.
// Uses the global database handle.
func (o *Income) SetUserG(ctx context.Context, insert bool, related *User) error {
	return o.SetUser(ctx, boil.GetContextDB(), insert, related)
}

// SetUser of the income to the related item.
// Sets o.R.User to related.
// Adds o to related.R.Incomes.
func (o *Income) SetUser(ctx context.Context, exec boil.ContextExecutor, insert bool, related *User) error {
	var err error
	if insert {
		if err = related.Insert(ctx, exec, boil.Infer()); err != nil {
			return errors.Wrap(err, "failed to insert into foreign table")
		}
	}

	updateQuery := fmt.Sprintf(
		"UPDATE \"incomes\" SET %s WHERE %s",
		strmangle.SetParamNames("\"", "\"", 1, []string{"user_id"}),
		strmangle.WhereClause("\"", "\"", 2, incomePrimaryKeyColumns),
	)
	values := []interface{}{related.ID, o.ID}

	if boil.IsDebug(ctx) {
		writer := boil.DebugWriterFrom(ctx)
		fmt.Fprintln(writer, updateQuery)
		fmt.Fprintln(writer, values)
	}
	if _, err = exec.ExecContext(ctx, updateQuery, values...); err != nil {
		return errors.Wrap(err, "failed to update local table")
	}

	o.UserID = related.ID
	if o.R == nil {
		o.R = &incomeR{
			User: related,
		}
	} else {
		o.R.User = related
	}

	if related.R == nil {
		related.R = &userR{
			Incomes: IncomeSlice{o},
		}
	} else {
		related.R.Incomes = append(related.R.Incomes, o)
	}

	return nil
}

// Incomes retrieves all the records using an executor.
func Incomes(mods ...qm.QueryMod) incomeQuery {
	mods = append(mods, qm.From("\"incomes\""))
	q := NewQuery(mods...)
	if len(queries.GetSelect(q)) == 0 {
		queries.SetSelect(q, []string{"\"incomes\".*"})
	}

	return incomeQuery{q}
}

// FindIncomeG retrieves a single record by ID.
func FindIncomeG(ctx context.Context, iD int, selectCols ...string) (*Income, error) {
	return FindIncome(ctx, boil.GetContextDB(), iD, selectCols...)
}

// FindIncome retrieves a single record by ID with an executor.
// If selectCols is empty Find will return all columns.
func FindIncome(ctx context.Context, exec boil.ContextExecutor, iD int, selectCols ...string) (*Income, error) {
	incomeObj := &Income{}

	sel := "*"
	if len(selectCols) > 0 {
		sel = strings.Join(strmangle.IdentQuoteSlice(dialect.LQ, dialect.RQ, selectCols), ",")
	}
	query := fmt.Sprintf(
		"select %s from \"incomes\" where \"id\"=$1", sel,
	)

	q := queries.Raw(query, iD)

	err := q.Bind(ctx, exec, incomeObj)
	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return nil, sql.ErrNoRows
		}
		return nil, errors.Wrap(err, "models: unable to select from incomes")
	}

	if err = incomeObj.doAfterSelectHooks(ctx, exec); err != nil {
		return incomeObj, err
	}

	return incomeObj, nil
}

// InsertG a single record. See Insert for whitelist behavior description.
func (o *Income) InsertG(ctx context.Context, columns boil.Columns) error {
	return o.Insert(ctx, boil.GetContextDB(), columns)
}

// Insert a single record using an executor.
// See boil.Columns.InsertColumnSet documentation to understand column list inference for inserts.
func (o *Income) Insert(ctx context.Context, exec boil.ContextExecutor, columns boil.Columns) error {
	if o == nil {
		return errors.New("models: no incomes provided for insertion")
	}

	var err error
	if !boil.TimestampsAreSkipped(ctx) {
		currTime := time.Now().In(boil.GetLocation())

		if o.CreatedAt.IsZero() {
			o.CreatedAt = currTime
		}
		if o.UpdatedAt.IsZero() {
			o.UpdatedAt = currTime
		}
	}

	if err := o.doBeforeInsertHooks(ctx, exec); err != nil {
		return err
	}

	nzDefaults := queries.NonZeroDefaultSet(incomeColumnsWithDefault, o)

	key := makeCacheKey(columns, nzDefaults)
	incomeInsertCacheMut.RLock()
	cache, cached := incomeInsertCache[key]
	incomeInsertCacheMut.RUnlock()

	if !cached {
		wl, returnColumns := columns.InsertColumnSet(
			incomeAllColumns,
			incomeColumnsWithDefault,
			incomeColumnsWithoutDefault,
			nzDefaults,
		)

		cache.valueMapping, err = queries.BindMapping(incomeType, incomeMapping, wl)
		if err != nil {
			return err
		}
		cache.retMapping, err = queries.BindMapping(incomeType, incomeMapping, returnColumns)
		if err != nil {
			return err
		}
		if len(wl) != 0 {
			cache.query = fmt.Sprintf("INSERT INTO \"incomes\" (\"%s\") %%sVALUES (%s)%%s", strings.Join(wl, "\",\""), strmangle.Placeholders(dialect.UseIndexPlaceholders, len(wl), 1, 1))
		} else {
			cache.query = "INSERT INTO \"incomes\" %sDEFAULT VALUES%s"
		}

		var queryOutput, queryReturning string

		if len(cache.retMapping) != 0 {
			queryReturning = fmt.Sprintf(" RETURNING \"%s\"", strings.Join(returnColumns, "\",\""))
		}

		cache.query = fmt.Sprintf(cache.query, queryOutput, queryReturning)
	}

	value := reflect.Indirect(reflect.ValueOf(o))
	vals := queries.ValuesFromMapping(value, cache.valueMapping)

	if boil.IsDebug(ctx) {
		writer := boil.DebugWriterFrom(ctx)
		fmt.Fprintln(writer, cache.query)
		fmt.Fprintln(writer, vals)
	}

	if len(cache.retMapping) != 0 {
		err = exec.QueryRowContext(ctx, cache.query, vals...).Scan(queries.PtrsFromMapping(value, cache.retMapping)...)
	} else {
		_, err = exec.ExecContext(ctx, cache.query, vals...)
	}

	if err != nil {
		return errors.Wrap(err, "models: unable to insert into incomes")
	}

	if !cached {
		incomeInsertCacheMut.Lock()
		incomeInsertCache[key] = cache
		incomeInsertCacheMut.Unlock()
	}

	return o.doAfterInsertHooks(ctx, exec)
}

// UpdateG a single Income record using the global executor.
// See Update for more documentation.
func (o *Income) UpdateG(ctx context.Context, columns boil.Columns) (int64, error) {
	return o.Update(ctx, boil.GetContextDB(), columns)
}

// Update uses an executor to update the Income.
// See boil.Columns.UpdateColumnSet documentation to understand column list inference for updates.
// Update does not automatically update the record in case of default values. Use .Reload() to refresh the records.
func (o *Income) Update(ctx context.Context, exec boil.ContextExecutor, columns boil.Columns) (int64, error) {
	if !boil.TimestampsAreSkipped(ctx) {
		currTime := time.Now().In(boil.GetLocation())

		o.UpdatedAt = currTime
	}

	var err error
	if err = o.doBeforeUpdateHooks(ctx, exec); err != nil {
		return 0, err
	}
	key := makeCacheKey(columns, nil)
	incomeUpdateCacheMut.RLock()
	cache, cached := incomeUpdateCache[key]
	incomeUpdateCacheMut.RUnlock()

	if !cached {
		wl := columns.UpdateColumnSet(
			incomeAllColumns,
			incomePrimaryKeyColumns,
		)

		if !columns.IsWhitelist() {
			wl = strmangle.SetComplement(wl, []string{"created_at"})
		}
		if len(wl) == 0 {
			return 0, errors.New("models: unable to update incomes, could not build whitelist")
		}

		cache.query = fmt.Sprintf("UPDATE \"incomes\" SET %s WHERE %s",
			strmangle.SetParamNames("\"", "\"", 1, wl),
			strmangle.WhereClause("\"", "\"", len(wl)+1, incomePrimaryKeyColumns),
		)
		cache.valueMapping, err = queries.BindMapping(incomeType, incomeMapping, append(wl, incomePrimaryKeyColumns...))
		if err != nil {
			return 0, err
		}
	}

	values := queries.ValuesFromMapping(reflect.Indirect(reflect.ValueOf(o)), cache.valueMapping)

	if boil.IsDebug(ctx) {
		writer := boil.DebugWriterFrom(ctx)
		fmt.Fprintln(writer, cache.query)
		fmt.Fprintln(writer, values)
	}
	var result sql.Result
	result, err = exec.ExecContext(ctx, cache.query, values...)
	if err != nil {
		return 0, errors.Wrap(err, "models: unable to update incomes row")
	}

	rowsAff, err := result.RowsAffected()
	if err != nil {
		return 0, errors.Wrap(err, "models: failed to get rows affected by update for incomes")
	}

	if !cached {
		incomeUpdateCacheMut.Lock()
		incomeUpdateCache[key] = cache
		incomeUpdateCacheMut.Unlock()
	}

	return rowsAff, o.doAfterUpdateHooks(ctx, exec)
}

// UpdateAllG updates all rows with the specified column values.
func (q incomeQuery) UpdateAllG(ctx context.Context, cols M) (int64, error) {
	return q.UpdateAll(ctx, boil.GetContextDB(), cols)
}

// UpdateAll updates all rows with the specified column values.
func (q incomeQuery) UpdateAll(ctx context.Context, exec boil.ContextExecutor, cols M) (int64, error) {
	queries.SetUpdate(q.Query, cols)

	result, err := q.Query.ExecContext(ctx, exec)
	if err != nil {
		return 0, errors.Wrap(err, "models: unable to update all for incomes")
	}

	rowsAff, err := result.RowsAffected()
	if err != nil {
		return 0, errors.Wrap(err, "models: unable to retrieve rows affected for incomes")
	}

	return rowsAff, nil
}

// UpdateAllG updates all rows with the specified column values.
func (o IncomeSlice) UpdateAllG(ctx context.Context, cols M) (int64, error) {
	return o.UpdateAll(ctx, boil.GetContextDB(), cols)
}

// UpdateAll updates all rows with the specified column values, using an executor.
func (o IncomeSlice) UpdateAll(ctx context.Context, exec boil.ContextExecutor, cols M) (int64, error) {
	ln := int64(len(o))
	if ln == 0 {
		return 0, nil
	}

	if len(cols) == 0 {
		return 0, errors.New("models: update all requires at least one column argument")
	}

	colNames := make([]string, len(cols))
	args := make([]interface{}, len(cols))

	i := 0
	for name, value := range cols {
		colNames[i] = name
		args[i] = value
		i++
	}

	// Append all of the primary key values for each column
	for _, obj := range o {
		pkeyArgs := queries.ValuesFromMapping(reflect.Indirect(reflect.ValueOf(obj)), incomePrimaryKeyMapping)
		args = append(args, pkeyArgs...)
	}

	sql := fmt.Sprintf("UPDATE \"incomes\" SET %s WHERE %s",
		strmangle.SetParamNames("\"", "\"", 1, colNames),
		strmangle.WhereClauseRepeated(string(dialect.LQ), string(dialect.RQ), len(colNames)+1, incomePrimaryKeyColumns, len(o)))

	if boil.IsDebug(ctx) {
		writer := boil.DebugWriterFrom(ctx)
		fmt.Fprintln(writer, sql)
		fmt.Fprintln(writer, args...)
	}
	result, err := exec.ExecContext(ctx, sql, args...)
	if err != nil {
		return 0, errors.Wrap(err, "models: unable to update all in income slice")
	}

	rowsAff, err := result.RowsAffected()
	if err != nil {
		return 0, errors.Wrap(err, "models: unable to retrieve rows affected all in update all income")
	}
	return rowsAff, nil
}

// UpsertG attempts an insert, and does an update or ignore on conflict.
func (o *Income) UpsertG(ctx context.Context, updateOnConflict bool, conflictColumns []string, updateColumns, insertColumns boil.Columns) error {
	return o.Upsert(ctx, boil.GetContextDB(), updateOnConflict, conflictColumns, updateColumns, insertColumns)
}

// Upsert attempts an insert using an executor, and does an update or ignore on conflict.
// See boil.Columns documentation for how to properly use updateColumns and insertColumns.
func (o *Income) Upsert(ctx context.Context, exec boil.ContextExecutor, updateOnConflict bool, conflictColumns []string, updateColumns, insertColumns boil.Columns) error {
	if o == nil {
		return errors.New("models: no incomes provided for upsert")
	}
	if !boil.TimestampsAreSkipped(ctx) {
		currTime := time.Now().In(boil.GetLocation())

		if o.CreatedAt.IsZero() {
			o.CreatedAt = currTime
		}
		o.UpdatedAt = currTime
	}

	if err := o.doBeforeUpsertHooks(ctx, exec); err != nil {
		return err
	}

	nzDefaults := queries.NonZeroDefaultSet(incomeColumnsWithDefault, o)

	// Build cache key in-line uglily - mysql vs psql problems
	buf := strmangle.GetBuffer()
	if updateOnConflict {
		buf.WriteByte('t')
	} else {
		buf.WriteByte('f')
	}
	buf.WriteByte('.')
	for _, c := range conflictColumns {
		buf.WriteString(c)
	}
	buf.WriteByte('.')
	buf.WriteString(strconv.Itoa(updateColumns.Kind))
	for _, c := range updateColumns.Cols {
		buf.WriteString(c)
	}
	buf.WriteByte('.')
	buf.WriteString(strconv.Itoa(insertColumns.Kind))
	for _, c := range insertColumns.Cols {
		buf.WriteString(c)
	}
	buf.WriteByte('.')
	for _, c := range nzDefaults {
		buf.WriteString(c)
	}
	key := buf.String()
	strmangle.PutBuffer(buf)

	incomeUpsertCacheMut.RLock()
	cache, cached := incomeUpsertCache[key]
	incomeUpsertCacheMut.RUnlock()

	var err error

	if !cached {
		insert, ret := insertColumns.InsertColumnSet(
			incomeAllColumns,
			incomeColumnsWithDefault,
			incomeColumnsWithoutDefault,
			nzDefaults,
		)

		update := updateColumns.UpdateColumnSet(
			incomeAllColumns,
			incomePrimaryKeyColumns,
		)

		if updateOnConflict && len(update) == 0 {
			return errors.New("models: unable to upsert incomes, could not build update column list")
		}

		conflict := conflictColumns
		if len(conflict) == 0 {
			conflict = make([]string, len(incomePrimaryKeyColumns))
			copy(conflict, incomePrimaryKeyColumns)
		}
		cache.query = buildUpsertQueryPostgres(dialect, "\"incomes\"", updateOnConflict, ret, update, conflict, insert)

		cache.valueMapping, err = queries.BindMapping(incomeType, incomeMapping, insert)
		if err != nil {
			return err
		}
		if len(ret) != 0 {
			cache.retMapping, err = queries.BindMapping(incomeType, incomeMapping, ret)
			if err != nil {
				return err
			}
		}
	}

	value := reflect.Indirect(reflect.ValueOf(o))
	vals := queries.ValuesFromMapping(value, cache.valueMapping)
	var returns []interface{}
	if len(cache.retMapping) != 0 {
		returns = queries.PtrsFromMapping(value, cache.retMapping)
	}

	if boil.IsDebug(ctx) {
		writer := boil.DebugWriterFrom(ctx)
		fmt.Fprintln(writer, cache.query)
		fmt.Fprintln(writer, vals)
	}
	if len(cache.retMapping) != 0 {
		err = exec.QueryRowContext(ctx, cache.query, vals...).Scan(returns...)
		if errors.Is(err, sql.ErrNoRows) {
			err = nil // Postgres doesn't return anything when there's no update
		}
	} else {
		_, err = exec.ExecContext(ctx, cache.query, vals...)
	}
	if err != nil {
		return errors.Wrap(err, "models: unable to upsert incomes")
	}

	if !cached {
		incomeUpsertCacheMut.Lock()
		incomeUpsertCache[key] = cache
		incomeUpsertCacheMut.Unlock()
	}

	return o.doAfterUpsertHooks(ctx, exec)
}

// DeleteG deletes a single Income record.
// DeleteG will match against the primary key column to find the record to delete.
func (o *Income) DeleteG(ctx context.Context) (int64, error) {
	return o.Delete(ctx, boil.GetContextDB())
}

// Delete deletes a single Income record with an executor.
// Delete will match against the primary key column to find the record to delete.
func (o *Income) Delete(ctx context.Context, exec boil.ContextExecutor) (int64, error) {
	if o == nil {
		return 0, errors.New("models: no Income provided for delete")
	}

	if err := o.doBeforeDeleteHooks(ctx, exec); err != nil {
		return 0, err
	}

	args := queries.ValuesFromMapping(reflect.Indirect(reflect.ValueOf(o)), incomePrimaryKeyMapping)
	sql := "DELETE FROM \"incomes\" WHERE \"id\"=$1"

	if boil.IsDebug(ctx) {
		writer := boil.DebugWriterFrom(ctx)
		fmt.Fprintln(writer, sql)
		fmt.Fprintln(writer, args...)
	}
	result, err := exec.ExecContext(ctx, sql, args...)
	if err != nil {
		return 0, errors.Wrap(err, "models: unable to delete from incomes")
	}

	rowsAff, err := result.RowsAffected()
	if err != nil {
		return 0, errors.Wrap(err, "models: failed to get rows affected by delete for incomes")
	}

	if err := o.doAfterDeleteHooks(ctx, exec); err != nil {
		return 0, err
	}

	return rowsAff, nil
}

func (q incomeQuery) DeleteAllG(ctx context.Context) (int64, error) {
	return q.DeleteAll(ctx, boil.GetContextDB())
}

// DeleteAll deletes all matching rows.
func (q incomeQuery) DeleteAll(ctx context.Context, exec boil.ContextExecutor) (int64, error) {
	if q.Query == nil {
		return 0, errors.New("models: no incomeQuery provided for delete all")
	}

	queries.SetDelete(q.Query)

	result, err := q.Query.ExecContext(ctx, exec)
	if err != nil {
		return 0, errors.Wrap(err, "models: unable to delete all from incomes")
	}

	rowsAff, err := result.RowsAffected()
	if err != nil {
		return 0, errors.Wrap(err, "models: failed to get rows affected by deleteall for incomes")
	}

	return rowsAff, nil
}

// DeleteAllG deletes all rows in the slice.
func (o IncomeSlice) DeleteAllG(ctx context.Context) (int64, error) {
	return o.DeleteAll(ctx, boil.GetContextDB())
}

// DeleteAll deletes all rows in the slice, using an executor.
func (o IncomeSlice) DeleteAll(ctx context.Context, exec boil.ContextExecutor) (int64, error) {
	if len(o) == 0 {
		return 0, nil
	}

	if len(incomeBeforeDeleteHooks) != 0 {
		for _, obj := range o {
			if err := obj.doBeforeDeleteHooks(ctx, exec); err != nil {
				return 0, err
			}
		}
	}

	var args []interface{}
	for _, obj := range o {
		pkeyArgs := queries.ValuesFromMapping(reflect.Indirect(reflect.ValueOf(obj)), incomePrimaryKeyMapping)
		args = append(args, pkeyArgs...)
	}

	sql := "DELETE FROM \"incomes\" WHERE " +
		strmangle.WhereClauseRepeated(string(dialect.LQ), string(dialect.RQ), 1, incomePrimaryKeyColumns, len(o))

	if boil.IsDebug(ctx) {
		writer := boil.DebugWriterFrom(ctx)
		fmt.Fprintln(writer, sql)
		fmt.Fprintln(writer, args)
	}
	result, err := exec.ExecContext(ctx, sql, args...)
	if err != nil {
		return 0, errors.Wrap(err, "models: unable to delete all from income slice")
	}

	rowsAff, err := result.RowsAffected()
	if err != nil {
		return 0, errors.Wrap(err, "models: failed to get rows affected by deleteall for incomes")
	}

	if len(incomeAfterDeleteHooks) != 0 {
		for _, obj := range o {
			if err := obj.doAfterDeleteHooks(ctx, exec); err != nil {
				return 0, err
			}
		}
	}

	return rowsAff, nil
}

// ReloadG refetches the object from the database using the primary keys.
func (o *Income) ReloadG(ctx context.Context) error {
	if o == nil {
		return errors.New("models: no Income provided for reload")
	}

	return o.Reload(ctx, boil.GetContextDB())
}

// Reload refetches the object from the database
// using the primary keys with an executor.
func (o *Income) Reload(ctx context.Context, exec boil.ContextExecutor) error {
	ret, err := FindIncome(ctx, exec, o.ID)
	if err != nil {
		return err
	}

	*o = *ret
	return nil
}

// ReloadAllG refetches every row with matching primary key column values
// and overwrites the original object slice with the newly updated slice.
func (o *IncomeSlice) ReloadAllG(ctx context.Context) error {
	if o == nil {
		return errors.New("models: empty IncomeSlice provided for reload all")
	}

	return o.ReloadAll(ctx, boil.GetContextDB())
}

// ReloadAll refetches every row with matching primary key column values
// and overwrites the original object slice with the newly updated slice.
func (o *IncomeSlice) ReloadAll(ctx context.Context, exec boil.ContextExecutor) error {
	if o == nil || len(*o) == 0 {
		return nil
	}

	slice := IncomeSlice{}
	var args []interface{}
	for _, obj := range *o {
		pkeyArgs := queries.ValuesFromMapping(reflect.Indirect(reflect.ValueOf(obj)), incomePrimaryKeyMapping)
		args = append(args, pkeyArgs...)
	}

	sql := "SELECT \"incomes\".* FROM \"incomes\" WHERE " +
		strmangle.WhereClauseRepeated(string(dialect.LQ), string(dialect.RQ), 1, incomePrimaryKeyColumns, len(*o))

	q := queries.Raw(sql, args...)

	err := q.Bind(ctx, exec, &slice)
	if err != nil {
		return errors.Wrap(err, "models: unable to reload all in IncomeSlice")
	}

	*o = slice

	return nil
}

// IncomeExistsG checks if the Income row exists.
func IncomeExistsG(ctx context.Context, iD int) (bool, error) {
	return IncomeExists(ctx, boil.GetContextDB(), iD)
}

// IncomeExists checks if the Income row exists.
func IncomeExists(ctx context.Context, exec boil.ContextExecutor, iD int) (bool, error) {
	var exists bool
	sql := "select exists(select 1 from \"incomes\" where \"id\"=$1 limit 1)"

	if boil.IsDebug(ctx) {
		writer := boil.DebugWriterFrom(ctx)
		fmt.Fprintln(writer, sql)
		fmt.Fprintln(writer, iD)
	}
	row := exec.QueryRowContext(ctx, sql, iD)

	err := row.Scan(&exists)
	if err != nil {
		return false, errors.Wrap(err, "models: unable to check if incomes exists")
	}

	return exists, nil
}

// Exists checks if the Income row exists.
func (o *Income) Exists(ctx context.Context, exec boil.ContextExecutor) (bool, error) {
	return IncomeExists(ctx, exec, o.ID)
}
