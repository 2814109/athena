package repositories

type Repository interface {
	FindAllTodoByUserId()
	FindAllArticle()
	CreateTodo()
	UpdateTodo()
	FindTodoByID()
}
