package repositories

type Repository interface {
	FindAllTodoByUserId()
	FindAllArticle()
	InsertTodo()
}
