CREATE TABLE IF NOT EXISTS monthly_payment_item_snapshots (
    id SERIAL PRIMARY KEY,
    monthly_amount NUMERIC(10, 2), 
    month DATE NOT NULL,
    created_at TIMESTAMP NOT NULL,
    monthly_payment_id serial NOT NULL references monthly_payment_snapshots(id),
    user_id serial,
    CONSTRAINT fk_user FOREIGN KEY (user_id) references users(id)
);