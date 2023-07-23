CREATE TABLE IF NOT EXISTS monthly_payment_snapshots (
    id SERIAL PRIMARY KEY,
    monthly_amount NUMERIC(10, 2), -- 合計値を計算して記録
    month DATE NOT NULL,
    created_at TIMESTAMP NOT NULL,
    user_id serial,
    CONSTRAINT fk_user FOREIGN KEY (user_id) references users(id)
);

-- 内訳は必要？