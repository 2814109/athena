CREATE TABLE IF NOT EXISTS credits (
    id SERIAL PRIMARY KEY,
    entry_id INT REFERENCES entries(id),
    account_name TEXT NOT NULL,
    amount NUMERIC NOT NULL
);