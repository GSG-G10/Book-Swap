BEGIN;

DROP TABLE IF EXISTS USERS CASCADE;
DROP TABLE IF EXISTS BOOKS CASCADE;
DROP TABLE IF EXISTS RENTS CASCADE;

CREATE TABLE IF NOT EXISTS USERS (
    USERNAME VARCHAR(10) PRIMARY KEY,
    FIRST_NAME TEXT NOT NULL,
    LAST_NAME TEXT NOT NULL,
    EMAIL TEXT NOT NULL,
    PASSWORD TEXT NOT NULL,
    PICTURE TEXT
);

CREATE TABLE IF NOT EXISTS BOOKS (
    ID SERIAL PRIMARY KEY,
    OWNER VARCHAR(10) REFERENCES USERS(USERNAME),
    NAME TEXT NOT NULL,
    PICTURE TEXT,
    AUTHOR TEXT
);

CREATE TABLE IF NOT EXISTS RENTS (
    BOOK_ID INTEGER REFERENCES BOOKS(ID),
    RENTER VARCHAR(10) REFERENCES USERS(USERNAME)
);

COMMIT;