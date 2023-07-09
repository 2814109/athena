CREATE TABLE IF NOT EXISTS items(
    id serial PRIMARY KEY,
    label VARCHAR (50)  NOT NULL,
    category_name VARCHAR (50) NOT NULL references categories(classification),
    created_at Date NOT NULL,
    updated_at Date NOT NULL,
    user_id serial,
    CONSTRAINT fk_user FOREIGN KEY (user_id) references users(id)
);

CREATE INDEX ON items(user_id)
