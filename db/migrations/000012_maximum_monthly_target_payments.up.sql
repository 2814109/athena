CREATE TABLE IF NOT EXISTS maximum_monthly_target_payments (
    id SERIAL PRIMARY KEY,
    monthly_amount NUMERIC(10, 2),
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    user_id serial,
    CONSTRAINT fk_user FOREIGN KEY (user_id) references users(id)
);