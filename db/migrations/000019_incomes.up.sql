CREATE TABLE IF NOT EXISTS incomes(
    id serial PRIMARY KEY,
    label VARCHAR (50)  NOT NULL,
    income_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    user_id serial,
    amount INT NOT NULL,
    CONSTRAINT fk_user FOREIGN KEY (user_id) references users(id)
);

CREATE INDEX ON incomes(user_id)
