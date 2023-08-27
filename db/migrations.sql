-- migrations.sql

-- Create kids table
CREATE TABLE kids (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Create thumbnail table
CREATE TABLE screenshots (
    id SERIAL PRIMARY KEY,
    kid_id INTEGER REFERENCES kids(id) ON DELETE CASCADE,
    thumbnail TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
