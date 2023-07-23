-- 品目単位の予算
CREATE TABLE IF NOT EXISTS predict_accounts (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR (50) NOT NULL references categories(classification),
    label VARCHAR (50)  NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    amount NUMERIC NOT NULL
);