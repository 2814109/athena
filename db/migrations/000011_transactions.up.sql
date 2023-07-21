CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    description VARCHAR(255),
    debit_amount NUMERIC(10, 2),
    credit_amount NUMERIC(10, 2),
    user_id serial,
    account_id INTEGER REFERENCES accounts(id),
    CONSTRAINT fk_user FOREIGN KEY (user_id) references users(id)

);