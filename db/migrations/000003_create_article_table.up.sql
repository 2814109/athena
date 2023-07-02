CREATE TABLE IF NOT EXISTS articles(
   article_id serial PRIMARY KEY,
   title VARCHAR (50)  NOT NULL,
   description VARCHAR (50) NOT NULL,
   status_id serial references statuses(status_id)
);