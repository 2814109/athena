CREATE TABLE IF NOT EXISTS todos(
   id serial PRIMARY KEY,
   content VARCHAR (50)  NOT NULL,
   user_id serial references users(id)
);

CREATE INDEX ON todos(user_id)
