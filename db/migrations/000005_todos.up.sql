CREATE TABLE IF NOT EXISTS todos(
   todo_id serial PRIMARY KEY,
   username VARCHAR (50) UNIQUE NOT NULL,
   password VARCHAR (50) NOT NULL,
   email VARCHAR (300) UNIQUE NOT NULL,
   user_id serial references users(user_id)
);

CREATE INDEX ON todos(user_id)
