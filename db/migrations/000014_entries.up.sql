CREATE TABLE IF NOT EXISTS entries (
    id SERIAL PRIMARY KEY,
    description TEXT NOT NULL,
    date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);