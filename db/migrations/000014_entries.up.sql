CREATE TABLE IF NOT EXISTS entries (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    user_id serial,
    CONSTRAINT fk_user FOREIGN KEY (user_id) references users(id)
);


CREATE INDEX ON entries(user_id)
