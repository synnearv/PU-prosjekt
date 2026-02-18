-- Postgres extention for `CITEXT` type, enforces case-insensitivity so "TeSt" = "test"
CREATE EXTENSION IF NOT EXISTS citext;

-- Creates namespace to not clutter public
CREATE SCHEMA IF NOT EXISTS hot_dog_app;
ALTER ROLE appadmin SET search_path TO hot_dog_app, public;

CREATE TABLE IF NOT EXISTS users (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username CITEXT UNIQUE NOT NULL,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL,
  email CITEXT UNIQUE NOT NULL,
    CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  password_hash TEXT NOT NULL
);
