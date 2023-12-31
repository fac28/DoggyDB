PRAGMA foreign_keys = OFF;

BEGIN;

CREATE TABLE IF NOT EXISTS owners (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  owner_name TEXT
);

CREATE TABLE IF NOT EXISTS dogs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  dog_name TEXT,
  dog_breed TEXT,
  owner_id INTEGER REFERENCES owners(id)
);

CREATE TABLE IF NOT EXISTS bookings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  dog_id INTEGER REFERENCES dogs(id),
  date TEXT
);

COMMIT;
