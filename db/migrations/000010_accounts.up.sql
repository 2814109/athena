CREATE TABLE IF NOT EXISTS accounts(
    account_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    account_type VARCHAR (50) NOT NULL references account_types(label)
);
