CREATE TABLE IF NOT EXISTS items(
    id serial PRIMARY KEY,
    item VARCHAR (50)  NOT NULL,
    category_name VARCHAR (50) NOT NULL references categories(classification),
    created_at Date NOT NULL,
    updated_at Date,
    user_id serial,
    CONSTRAINT fk_user FOREIGN KEY (user_id) references users(id)
);

