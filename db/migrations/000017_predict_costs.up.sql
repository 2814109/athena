-- 品目単位の予測コスト
CREATE TABLE IF NOT EXISTS predict_costs (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR (50) NOT NULL references categories(classification),
    label VARCHAR (50)  NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    amount INTEGER NOT NULL,
    user_id serial,
    CONSTRAINT fk_user FOREIGN KEY (user_id) references users(id)
);

CREATE INDEX ON predict_costs(user_id)
