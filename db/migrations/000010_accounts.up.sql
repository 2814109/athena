CREATE TABLE IF NOT EXISTS accounts(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    account_type VARCHAR (50) NOT NULL references account_types(label)
);
