CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    description VARCHAR(255),
    debit_amount NUMERIC(10, 2),
    credit_amount NUMERIC(10, 2),
    account_id INTEGER REFERENCES accounts(account_id)
);