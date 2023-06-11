CREATE TABLE IF NOT EXISTS statuses(
   status_id serial PRIMARY KEY,
   label VARCHAR (50) UNIQUE NOT NULL
);