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

// Status is an object representing the database table.
type Status struct {
	Label string `boil:"label" json:"label" toml:"label" yaml:"label"`

	R *statusR `boil:"-" json:"-" toml:"-" yaml:"-"`
	L statusL  `boil:"-" json:"-" toml:"-" yaml:"-"`
}

var StatusColumns = struct {
	Label string
}{
	Label: "label",
}

var StatusTableColumns = struct {
	Label string
}{
	Label: "statuses.label",
}

// Generated where

var StatusWhere = struct {
	Label whereHelperstring
}{
	Label: whereHelperstring{field: "\"statuses\".\"label\""},
}

// StatusRels is where relationship names are stored.
var StatusRels = struct {
	Articles string
}{
	Articles: "Articles",
}

// statusR is where relationships are stored.
type statusR struct {
	Articles ArticleSlice `boil:"Articles" json:"Articles" toml:"Articles" yaml:"Articles"`
}

// NewStruct creates a new relationship struct
func (*statusR) NewStruct() *statusR {
	return &statusR{}
}

func (r *statusR) GetArticles() ArticleSlice {
	if r == nil {
		return nil
	}
	return r.Articles
}

// statusL is where Load methods for each relationship are stored.
type statusL struct{}

var (
	statusAllColumns            = []string{"label"}
	statusColumnsWithoutDefault = []string{"label"}
	statusColumnsWithDefault    = []string{}
	statusPrimaryKeyColumns     = []string{"label"}
	statusGeneratedColumns      = []string{}
)

type (
	// StatusSlice is an alias for a slice of pointers to Status.
	// This should almost always be used instead of []Status.
	StatusSlice []*Status
	// StatusHook is the signature for custom Status hook methods
	StatusHook func(context.Context, boil.ContextExecutor, *Status) error

	statusQuery struct {
		*queries.Query
	}
)

// Cache for insert, update and upsert
var (
	statusType                 = reflect.TypeOf(&Status{})
	statusMapping              = queries.MakeStructMapping(statusType)
	statusPrimaryKeyMapping, _ = queries.BindMapping(statusType, statusMapping, statusPrimaryKeyColumns)
	statusInsertCacheMut       sync.RWMutex
	statusInsertCache          = make(map[string]insertCache)
	statusUpdateCacheMut       sync.RWMutex
	statusUpdateCache          = make(map[string]updateCache)
	statusUpsertCacheMut       sync.RWMutex
	statusUpsertCache          = make(map[string]insertCache)
)

var (
	// Force time package dependency for automated UpdatedAt/CreatedAt.
	_ = time.Second
	// Force qmhelper dependency for where clause generation (which doesn't
	// always happen)
	_ = qmhelper.Where
)

var statusAfterSelectHooks []StatusHook

var statusBeforeInsertHooks []StatusHook
var statusAfterInsertHooks []StatusHook

var statusBeforeUpdateHooks []StatusHook
var statusAfterUpdateHooks []StatusHook

var statusBeforeDeleteHooks []StatusHook
var statusAfterDeleteHooks []StatusHook

var statusBeforeUpsertHooks []StatusHook
var statusAfterUpsertHooks []StatusHook

// doAfterSelectHooks executes all "after Select" hooks.
func (o *Status) doAfterSelectHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range statusAfterSelectHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// doBeforeInsertHooks executes all "before insert" hooks.
func (o *Status) doBeforeInsertHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range statusBeforeInsertHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// doAfterInsertHooks executes all "after Insert" hooks.
func (o *Status) doAfterInsertHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range statusAfterInsertHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// doBeforeUpdateHooks executes all "before Update" hooks.
func (o *Status) doBeforeUpdateHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range statusBeforeUpdateHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// doAfterUpdateHooks executes all "after Update" hooks.
func (o *Status) doAfterUpdateHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range statusAfterUpdateHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// doBeforeDeleteHooks executes all "before Delete" hooks.
func (o *Status) doBeforeDeleteHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range statusBeforeDeleteHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// doAfterDeleteHooks executes all "after Delete" hooks.
func (o *Status) doAfterDeleteHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range statusAfterDeleteHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// doBeforeUpsertHooks executes all "before Upsert" hooks.
func (o *Status) doBeforeUpsertHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range statusBeforeUpsertHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// doAfterUpsertHooks executes all "after Upsert" hooks.
func (o *Status) doAfterUpsertHooks(ctx context.Context, exec boil.ContextExecutor) (err error) {
	if boil.HooksAreSkipped(ctx) {
		return nil
	}

	for _, hook := range statusAfterUpsertHooks {
		if err := hook(ctx, exec, o); err != nil {
			return err
		}
	}

	return nil
}

// AddStatusHook registers your hook function for all future operations.
func AddStatusHook(hookPoint boil.HookPoint, statusHook StatusHook) {
	switch hookPoint {
	case boil.AfterSelectHook:
		statusAfterSelectHooks = append(statusAfterSelectHooks, statusHook)
	case boil.BeforeInsertHook:
		statusBeforeInsertHooks = append(statusBeforeInsertHooks, statusHook)
	case boil.AfterInsertHook:
		statusAfterInsertHooks = append(statusAfterInsertHooks, statusHook)
	case boil.BeforeUpdateHook:
		statusBeforeUpdateHooks = append(statusBeforeUpdateHooks, statusHook)
	case boil.AfterUpdateHook:
		statusAfterUpdateHooks = append(statusAfterUpdateHooks, statusHook)
	case boil.BeforeDeleteHook:
		statusBeforeDeleteHooks = append(statusBeforeDeleteHooks, statusHook)
	case boil.AfterDeleteHook:
		statusAfterDeleteHooks = append(statusAfterDeleteHooks, statusHook)
	case boil.BeforeUpsertHook:
		statusBeforeUpsertHooks = append(statusBeforeUpsertHooks, statusHook)
	case boil.AfterUpsertHook:
		statusAfterUpsertHooks = append(statusAfterUpsertHooks, statusHook)
	}
}

// OneG returns a single status record from the query using the global executor.
func (q statusQuery) OneG(ctx context.Context) (*Status, error) {
	return q.One(ctx, boil.GetContextDB())
}

// One returns a single status record from the query.
func (q statusQuery) One(ctx context.Context, exec boil.ContextExecutor) (*Status, error) {
	o := &Status{}

	queries.SetLimit(q.Query, 1)

	err := q.Bind(ctx, exec, o)
	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return nil, sql.ErrNoRows
		}
		return nil, errors.Wrap(err, "models: failed to execute a one query for statuses")
	}

	if err := o.doAfterSelectHooks(ctx, exec); err != nil {
		return o, err
	}

	return o, nil
}

// AllG returns all Status records from the query using the global executor.
func (q statusQuery) AllG(ctx context.Context) (StatusSlice, error) {
	return q.All(ctx, boil.GetContextDB())
}

// All returns all Status records from the query.
func (q statusQuery) All(ctx context.Context, exec boil.ContextExecutor) (StatusSlice, error) {
	var o []*Status

	err := q.Bind(ctx, exec, &o)
	if err != nil {
		return nil, errors.Wrap(err, "models: failed to assign all query results to Status slice")
	}

	if len(statusAfterSelectHooks) != 0 {
		for _, obj := range o {
			if err := obj.doAfterSelectHooks(ctx, exec); err != nil {
				return o, err
			}
		}
	}

	return o, nil
}

// CountG returns the count of all Status records in the query using the global executor
func (q statusQuery) CountG(ctx context.Context) (int64, error) {
	return q.Count(ctx, boil.GetContextDB())
}

// Count returns the count of all Status records in the query.
func (q statusQuery) Count(ctx context.Context, exec boil.ContextExecutor) (int64, error) {
	var count int64

	queries.SetSelect(q.Query, nil)
	queries.SetCount(q.Query)

	err := q.Query.QueryRowContext(ctx, exec).Scan(&count)
	if err != nil {
		return 0, errors.Wrap(err, "models: failed to count statuses rows")
	}

	return count, nil
}

// ExistsG checks if the row exists in the table using the global executor.
func (q statusQuery) ExistsG(ctx context.Context) (bool, error) {
	return q.Exists(ctx, boil.GetContextDB())
}

// Exists checks if the row exists in the table.
func (q statusQuery) Exists(ctx context.Context, exec boil.ContextExecutor) (bool, error) {
	var count int64

	queries.SetSelect(q.Query, nil)
	queries.SetCount(q.Query)
	queries.SetLimit(q.Query, 1)

	err := q.Query.QueryRowContext(ctx, exec).Scan(&count)
	if err != nil {
		return false, errors.Wrap(err, "models: failed to check if statuses exists")
	}

	return count > 0, nil
}

// Articles retrieves all the article's Articles with an executor.
func (o *Status) Articles(mods ...qm.QueryMod) articleQuery {
	var queryMods []qm.QueryMod
	if len(mods) != 0 {
		queryMods = append(queryMods, mods...)
	}

	queryMods = append(queryMods,
		qm.Where("\"articles\".\"status\"=?", o.Label),
	)

	return Articles(queryMods...)
}

// LoadArticles allows an eager lookup of values, cached into the
// loaded structs of the objects. This is for a 1-M or N-M relationship.
func (statusL) LoadArticles(ctx context.Context, e boil.ContextExecutor, singular bool, maybeStatus interface{}, mods queries.Applicator) error {
	var slice []*Status
	var object *Status

	if singular {
		var ok bool
		object, ok = maybeStatus.(*Status)
		if !ok {
			object = new(Status)
			ok = queries.SetFromEmbeddedStruct(&object, &maybeStatus)
			if !ok {
				return errors.New(fmt.Sprintf("failed to set %T from embedded struct %T", object, maybeStatus))
			}
		}
	} else {
		s, ok := maybeStatus.(*[]*Status)
		if ok {
			slice = *s
		} else {
			ok = queries.SetFromEmbeddedStruct(&slice, maybeStatus)
			if !ok {
				return errors.New(fmt.Sprintf("failed to set %T from embedded struct %T", slice, maybeStatus))
			}
		}
	}

	args := make([]interface{}, 0, 1)
	if singular {
		if object.R == nil {
			object.R = &statusR{}
		}
		args = append(args, object.Label)
	} else {
	Outer:
		for _, obj := range slice {
			if obj.R == nil {
				obj.R = &statusR{}
			}

			for _, a := range args {
				if a == obj.Label {
					continue Outer
				}
			}

			args = append(args, obj.Label)
		}
	}

	if len(args) == 0 {
		return nil
	}

	query := NewQuery(
		qm.From(`articles`),
		qm.WhereIn(`articles.status in ?`, args...),
	)
	if mods != nil {
		mods.Apply(query)
	}

	results, err := query.QueryContext(ctx, e)
	if err != nil {
		return errors.Wrap(err, "failed to eager load articles")
	}

	var resultSlice []*Article
	if err = queries.Bind(results, &resultSlice); err != nil {
		return errors.Wrap(err, "failed to bind eager loaded slice articles")
	}

	if err = results.Close(); err != nil {
		return errors.Wrap(err, "failed to close results in eager load on articles")
	}
	if err = results.Err(); err != nil {
		return errors.Wrap(err, "error occurred during iteration of eager loaded relations for articles")
	}

	if len(articleAfterSelectHooks) != 0 {
		for _, obj := range resultSlice {
			if err := obj.doAfterSelectHooks(ctx, e); err != nil {
				return err
			}
		}
	}
	if singular {
		object.R.Articles = resultSlice
		for _, foreign := range resultSlice {
			if foreign.R == nil {
				foreign.R = &articleR{}
			}
			foreign.R.ArticleStatus = object
		}
		return nil
	}

	for _, foreign := range resultSlice {
		for _, local := range slice {
			if local.Label == foreign.Status {
				local.R.Articles = append(local.R.Articles, foreign)
				if foreign.R == nil {
					foreign.R = &articleR{}
				}
				foreign.R.ArticleStatus = local
				break
			}
		}
	}

	return nil
}

// AddArticlesG adds the given related objects to the existing relationships
// of the status, optionally inserting them as new records.
// Appends related to o.R.Articles.
// Sets related.R.ArticleStatus appropriately.
// Uses the global database handle.
func (o *Status) AddArticlesG(ctx context.Context, insert bool, related ...*Article) error {
	return o.AddArticles(ctx, boil.GetContextDB(), insert, related...)
}

// AddArticles adds the given related objects to the existing relationships
// of the status, optionally inserting them as new records.
// Appends related to o.R.Articles.
// Sets related.R.ArticleStatus appropriately.
func (o *Status) AddArticles(ctx context.Context, exec boil.ContextExecutor, insert bool, related ...*Article) error {
	var err error
	for _, rel := range related {
		if insert {
			rel.Status = o.Label
			if err = rel.Insert(ctx, exec, boil.Infer()); err != nil {
				return errors.Wrap(err, "failed to insert into foreign table")
			}
		} else {
			updateQuery := fmt.Sprintf(
				"UPDATE \"articles\" SET %s WHERE %s",
				strmangle.SetParamNames("\"", "\"", 1, []string{"status"}),
				strmangle.WhereClause("\"", "\"", 2, articlePrimaryKeyColumns),
			)
			values := []interface{}{o.Label, rel.ID}

			if boil.IsDebug(ctx) {
				writer := boil.DebugWriterFrom(ctx)
				fmt.Fprintln(writer, updateQuery)
				fmt.Fprintln(writer, values)
			}
			if _, err = exec.ExecContext(ctx, updateQuery, values...); err != nil {
				return errors.Wrap(err, "failed to update foreign table")
			}

			rel.Status = o.Label
		}
	}

	if o.R == nil {
		o.R = &statusR{
			Articles: related,
		}
	} else {
		o.R.Articles = append(o.R.Articles, related...)
	}

	for _, rel := range related {
		if rel.R == nil {
			rel.R = &articleR{
				ArticleStatus: o,
			}
		} else {
			rel.R.ArticleStatus = o
		}
	}
	return nil
}

// Statuses retrieves all the records using an executor.
func Statuses(mods ...qm.QueryMod) statusQuery {
	mods = append(mods, qm.From("\"statuses\""))
	q := NewQuery(mods...)
	if len(queries.GetSelect(q)) == 0 {
		queries.SetSelect(q, []string{"\"statuses\".*"})
	}

	return statusQuery{q}
}

// FindStatusG retrieves a single record by ID.
func FindStatusG(ctx context.Context, label string, selectCols ...string) (*Status, error) {
	return FindStatus(ctx, boil.GetContextDB(), label, selectCols...)
}

// FindStatus retrieves a single record by ID with an executor.
// If selectCols is empty Find will return all columns.
func FindStatus(ctx context.Context, exec boil.ContextExecutor, label string, selectCols ...string) (*Status, error) {
	statusObj := &Status{}

	sel := "*"
	if len(selectCols) > 0 {
		sel = strings.Join(strmangle.IdentQuoteSlice(dialect.LQ, dialect.RQ, selectCols), ",")
	}
	query := fmt.Sprintf(
		"select %s from \"statuses\" where \"label\"=$1", sel,
	)

	q := queries.Raw(query, label)

	err := q.Bind(ctx, exec, statusObj)
	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return nil, sql.ErrNoRows
		}
		return nil, errors.Wrap(err, "models: unable to select from statuses")
	}

	if err = statusObj.doAfterSelectHooks(ctx, exec); err != nil {
		return statusObj, err
	}

	return statusObj, nil
}

// InsertG a single record. See Insert for whitelist behavior description.
func (o *Status) InsertG(ctx context.Context, columns boil.Columns) error {
	return o.Insert(ctx, boil.GetContextDB(), columns)
}

// Insert a single record using an executor.
// See boil.Columns.InsertColumnSet documentation to understand column list inference for inserts.
func (o *Status) Insert(ctx context.Context, exec boil.ContextExecutor, columns boil.Columns) error {
	if o == nil {
		return errors.New("models: no statuses provided for insertion")
	}

	var err error

	if err := o.doBeforeInsertHooks(ctx, exec); err != nil {
		return err
	}

	nzDefaults := queries.NonZeroDefaultSet(statusColumnsWithDefault, o)

	key := makeCacheKey(columns, nzDefaults)
	statusInsertCacheMut.RLock()
	cache, cached := statusInsertCache[key]
	statusInsertCacheMut.RUnlock()

	if !cached {
		wl, returnColumns := columns.InsertColumnSet(
			statusAllColumns,
			statusColumnsWithDefault,
			statusColumnsWithoutDefault,
			nzDefaults,
		)

		cache.valueMapping, err = queries.BindMapping(statusType, statusMapping, wl)
		if err != nil {
			return err
		}
		cache.retMapping, err = queries.BindMapping(statusType, statusMapping, returnColumns)
		if err != nil {
			return err
		}
		if len(wl) != 0 {
			cache.query = fmt.Sprintf("INSERT INTO \"statuses\" (\"%s\") %%sVALUES (%s)%%s", strings.Join(wl, "\",\""), strmangle.Placeholders(dialect.UseIndexPlaceholders, len(wl), 1, 1))
		} else {
			cache.query = "INSERT INTO \"statuses\" %sDEFAULT VALUES%s"
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
		return errors.Wrap(err, "models: unable to insert into statuses")
	}

	if !cached {
		statusInsertCacheMut.Lock()
		statusInsertCache[key] = cache
		statusInsertCacheMut.Unlock()
	}

	return o.doAfterInsertHooks(ctx, exec)
}

// UpdateG a single Status record using the global executor.
// See Update for more documentation.
func (o *Status) UpdateG(ctx context.Context, columns boil.Columns) (int64, error) {
	return o.Update(ctx, boil.GetContextDB(), columns)
}

// Update uses an executor to update the Status.
// See boil.Columns.UpdateColumnSet documentation to understand column list inference for updates.
// Update does not automatically update the record in case of default values. Use .Reload() to refresh the records.
func (o *Status) Update(ctx context.Context, exec boil.ContextExecutor, columns boil.Columns) (int64, error) {
	var err error
	if err = o.doBeforeUpdateHooks(ctx, exec); err != nil {
		return 0, err
	}
	key := makeCacheKey(columns, nil)
	statusUpdateCacheMut.RLock()
	cache, cached := statusUpdateCache[key]
	statusUpdateCacheMut.RUnlock()

	if !cached {
		wl := columns.UpdateColumnSet(
			statusAllColumns,
			statusPrimaryKeyColumns,
		)

		if !columns.IsWhitelist() {
			wl = strmangle.SetComplement(wl, []string{"created_at"})
		}
		if len(wl) == 0 {
			return 0, errors.New("models: unable to update statuses, could not build whitelist")
		}

		cache.query = fmt.Sprintf("UPDATE \"statuses\" SET %s WHERE %s",
			strmangle.SetParamNames("\"", "\"", 1, wl),
			strmangle.WhereClause("\"", "\"", len(wl)+1, statusPrimaryKeyColumns),
		)
		cache.valueMapping, err = queries.BindMapping(statusType, statusMapping, append(wl, statusPrimaryKeyColumns...))
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
		return 0, errors.Wrap(err, "models: unable to update statuses row")
	}

	rowsAff, err := result.RowsAffected()
	if err != nil {
		return 0, errors.Wrap(err, "models: failed to get rows affected by update for statuses")
	}

	if !cached {
		statusUpdateCacheMut.Lock()
		statusUpdateCache[key] = cache
		statusUpdateCacheMut.Unlock()
	}

	return rowsAff, o.doAfterUpdateHooks(ctx, exec)
}

// UpdateAllG updates all rows with the specified column values.
func (q statusQuery) UpdateAllG(ctx context.Context, cols M) (int64, error) {
	return q.UpdateAll(ctx, boil.GetContextDB(), cols)
}

// UpdateAll updates all rows with the specified column values.
func (q statusQuery) UpdateAll(ctx context.Context, exec boil.ContextExecutor, cols M) (int64, error) {
	queries.SetUpdate(q.Query, cols)

	result, err := q.Query.ExecContext(ctx, exec)
	if err != nil {
		return 0, errors.Wrap(err, "models: unable to update all for statuses")
	}

	rowsAff, err := result.RowsAffected()
	if err != nil {
		return 0, errors.Wrap(err, "models: unable to retrieve rows affected for statuses")
	}

	return rowsAff, nil
}

// UpdateAllG updates all rows with the specified column values.
func (o StatusSlice) UpdateAllG(ctx context.Context, cols M) (int64, error) {
	return o.UpdateAll(ctx, boil.GetContextDB(), cols)
}

// UpdateAll updates all rows with the specified column values, using an executor.
func (o StatusSlice) UpdateAll(ctx context.Context, exec boil.ContextExecutor, cols M) (int64, error) {
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
		pkeyArgs := queries.ValuesFromMapping(reflect.Indirect(reflect.ValueOf(obj)), statusPrimaryKeyMapping)
		args = append(args, pkeyArgs...)
	}

	sql := fmt.Sprintf("UPDATE \"statuses\" SET %s WHERE %s",
		strmangle.SetParamNames("\"", "\"", 1, colNames),
		strmangle.WhereClauseRepeated(string(dialect.LQ), string(dialect.RQ), len(colNames)+1, statusPrimaryKeyColumns, len(o)))

	if boil.IsDebug(ctx) {
		writer := boil.DebugWriterFrom(ctx)
		fmt.Fprintln(writer, sql)
		fmt.Fprintln(writer, args...)
	}
	result, err := exec.ExecContext(ctx, sql, args...)
	if err != nil {
		return 0, errors.Wrap(err, "models: unable to update all in status slice")
	}

	rowsAff, err := result.RowsAffected()
	if err != nil {
		return 0, errors.Wrap(err, "models: unable to retrieve rows affected all in update all status")
	}
	return rowsAff, nil
}

// UpsertG attempts an insert, and does an update or ignore on conflict.
func (o *Status) UpsertG(ctx context.Context, updateOnConflict bool, conflictColumns []string, updateColumns, insertColumns boil.Columns) error {
	return o.Upsert(ctx, boil.GetContextDB(), updateOnConflict, conflictColumns, updateColumns, insertColumns)
}

// Upsert attempts an insert using an executor, and does an update or ignore on conflict.
// See boil.Columns documentation for how to properly use updateColumns and insertColumns.
func (o *Status) Upsert(ctx context.Context, exec boil.ContextExecutor, updateOnConflict bool, conflictColumns []string, updateColumns, insertColumns boil.Columns) error {
	if o == nil {
		return errors.New("models: no statuses provided for upsert")
	}

	if err := o.doBeforeUpsertHooks(ctx, exec); err != nil {
		return err
	}

	nzDefaults := queries.NonZeroDefaultSet(statusColumnsWithDefault, o)

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

	statusUpsertCacheMut.RLock()
	cache, cached := statusUpsertCache[key]
	statusUpsertCacheMut.RUnlock()

	var err error

	if !cached {
		insert, ret := insertColumns.InsertColumnSet(
			statusAllColumns,
			statusColumnsWithDefault,
			statusColumnsWithoutDefault,
			nzDefaults,
		)

		update := updateColumns.UpdateColumnSet(
			statusAllColumns,
			statusPrimaryKeyColumns,
		)

		if updateOnConflict && len(update) == 0 {
			return errors.New("models: unable to upsert statuses, could not build update column list")
		}

		conflict := conflictColumns
		if len(conflict) == 0 {
			conflict = make([]string, len(statusPrimaryKeyColumns))
			copy(conflict, statusPrimaryKeyColumns)
		}
		cache.query = buildUpsertQueryPostgres(dialect, "\"statuses\"", updateOnConflict, ret, update, conflict, insert)

		cache.valueMapping, err = queries.BindMapping(statusType, statusMapping, insert)
		if err != nil {
			return err
		}
		if len(ret) != 0 {
			cache.retMapping, err = queries.BindMapping(statusType, statusMapping, ret)
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
		return errors.Wrap(err, "models: unable to upsert statuses")
	}

	if !cached {
		statusUpsertCacheMut.Lock()
		statusUpsertCache[key] = cache
		statusUpsertCacheMut.Unlock()
	}

	return o.doAfterUpsertHooks(ctx, exec)
}

// DeleteG deletes a single Status record.
// DeleteG will match against the primary key column to find the record to delete.
func (o *Status) DeleteG(ctx context.Context) (int64, error) {
	return o.Delete(ctx, boil.GetContextDB())
}

// Delete deletes a single Status record with an executor.
// Delete will match against the primary key column to find the record to delete.
func (o *Status) Delete(ctx context.Context, exec boil.ContextExecutor) (int64, error) {
	if o == nil {
		return 0, errors.New("models: no Status provided for delete")
	}

	if err := o.doBeforeDeleteHooks(ctx, exec); err != nil {
		return 0, err
	}

	args := queries.ValuesFromMapping(reflect.Indirect(reflect.ValueOf(o)), statusPrimaryKeyMapping)
	sql := "DELETE FROM \"statuses\" WHERE \"label\"=$1"

	if boil.IsDebug(ctx) {
		writer := boil.DebugWriterFrom(ctx)
		fmt.Fprintln(writer, sql)
		fmt.Fprintln(writer, args...)
	}
	result, err := exec.ExecContext(ctx, sql, args...)
	if err != nil {
		return 0, errors.Wrap(err, "models: unable to delete from statuses")
	}

	rowsAff, err := result.RowsAffected()
	if err != nil {
		return 0, errors.Wrap(err, "models: failed to get rows affected by delete for statuses")
	}

	if err := o.doAfterDeleteHooks(ctx, exec); err != nil {
		return 0, err
	}

	return rowsAff, nil
}

func (q statusQuery) DeleteAllG(ctx context.Context) (int64, error) {
	return q.DeleteAll(ctx, boil.GetContextDB())
}

// DeleteAll deletes all matching rows.
func (q statusQuery) DeleteAll(ctx context.Context, exec boil.ContextExecutor) (int64, error) {
	if q.Query == nil {
		return 0, errors.New("models: no statusQuery provided for delete all")
	}

	queries.SetDelete(q.Query)

	result, err := q.Query.ExecContext(ctx, exec)
	if err != nil {
		return 0, errors.Wrap(err, "models: unable to delete all from statuses")
	}

	rowsAff, err := result.RowsAffected()
	if err != nil {
		return 0, errors.Wrap(err, "models: failed to get rows affected by deleteall for statuses")
	}

	return rowsAff, nil
}

// DeleteAllG deletes all rows in the slice.
func (o StatusSlice) DeleteAllG(ctx context.Context) (int64, error) {
	return o.DeleteAll(ctx, boil.GetContextDB())
}

// DeleteAll deletes all rows in the slice, using an executor.
func (o StatusSlice) DeleteAll(ctx context.Context, exec boil.ContextExecutor) (int64, error) {
	if len(o) == 0 {
		return 0, nil
	}

	if len(statusBeforeDeleteHooks) != 0 {
		for _, obj := range o {
			if err := obj.doBeforeDeleteHooks(ctx, exec); err != nil {
				return 0, err
			}
		}
	}

	var args []interface{}
	for _, obj := range o {
		pkeyArgs := queries.ValuesFromMapping(reflect.Indirect(reflect.ValueOf(obj)), statusPrimaryKeyMapping)
		args = append(args, pkeyArgs...)
	}

	sql := "DELETE FROM \"statuses\" WHERE " +
		strmangle.WhereClauseRepeated(string(dialect.LQ), string(dialect.RQ), 1, statusPrimaryKeyColumns, len(o))

	if boil.IsDebug(ctx) {
		writer := boil.DebugWriterFrom(ctx)
		fmt.Fprintln(writer, sql)
		fmt.Fprintln(writer, args)
	}
	result, err := exec.ExecContext(ctx, sql, args...)
	if err != nil {
		return 0, errors.Wrap(err, "models: unable to delete all from status slice")
	}

	rowsAff, err := result.RowsAffected()
	if err != nil {
		return 0, errors.Wrap(err, "models: failed to get rows affected by deleteall for statuses")
	}

	if len(statusAfterDeleteHooks) != 0 {
		for _, obj := range o {
			if err := obj.doAfterDeleteHooks(ctx, exec); err != nil {
				return 0, err
			}
		}
	}

	return rowsAff, nil
}

// ReloadG refetches the object from the database using the primary keys.
func (o *Status) ReloadG(ctx context.Context) error {
	if o == nil {
		return errors.New("models: no Status provided for reload")
	}

	return o.Reload(ctx, boil.GetContextDB())
}

// Reload refetches the object from the database
// using the primary keys with an executor.
func (o *Status) Reload(ctx context.Context, exec boil.ContextExecutor) error {
	ret, err := FindStatus(ctx, exec, o.Label)
	if err != nil {
		return err
	}

	*o = *ret
	return nil
}

// ReloadAllG refetches every row with matching primary key column values
// and overwrites the original object slice with the newly updated slice.
func (o *StatusSlice) ReloadAllG(ctx context.Context) error {
	if o == nil {
		return errors.New("models: empty StatusSlice provided for reload all")
	}

	return o.ReloadAll(ctx, boil.GetContextDB())
}

// ReloadAll refetches every row with matching primary key column values
// and overwrites the original object slice with the newly updated slice.
func (o *StatusSlice) ReloadAll(ctx context.Context, exec boil.ContextExecutor) error {
	if o == nil || len(*o) == 0 {
		return nil
	}

	slice := StatusSlice{}
	var args []interface{}
	for _, obj := range *o {
		pkeyArgs := queries.ValuesFromMapping(reflect.Indirect(reflect.ValueOf(obj)), statusPrimaryKeyMapping)
		args = append(args, pkeyArgs...)
	}

	sql := "SELECT \"statuses\".* FROM \"statuses\" WHERE " +
		strmangle.WhereClauseRepeated(string(dialect.LQ), string(dialect.RQ), 1, statusPrimaryKeyColumns, len(*o))

	q := queries.Raw(sql, args...)

	err := q.Bind(ctx, exec, &slice)
	if err != nil {
		return errors.Wrap(err, "models: unable to reload all in StatusSlice")
	}

	*o = slice

	return nil
}

// StatusExistsG checks if the Status row exists.
func StatusExistsG(ctx context.Context, label string) (bool, error) {
	return StatusExists(ctx, boil.GetContextDB(), label)
}

// StatusExists checks if the Status row exists.
func StatusExists(ctx context.Context, exec boil.ContextExecutor, label string) (bool, error) {
	var exists bool
	sql := "select exists(select 1 from \"statuses\" where \"label\"=$1 limit 1)"

	if boil.IsDebug(ctx) {
		writer := boil.DebugWriterFrom(ctx)
		fmt.Fprintln(writer, sql)
		fmt.Fprintln(writer, label)
	}
	row := exec.QueryRowContext(ctx, sql, label)

	err := row.Scan(&exists)
	if err != nil {
		return false, errors.Wrap(err, "models: unable to check if statuses exists")
	}

	return exists, nil
}

// Exists checks if the Status row exists.
func (o *Status) Exists(ctx context.Context, exec boil.ContextExecutor) (bool, error) {
	return StatusExists(ctx, exec, o.Label)
}