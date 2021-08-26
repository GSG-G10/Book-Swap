BEGIN;

DROP TABLE IF EXISTS USERS CASCADE;
DROP TABLE IF EXISTS BOOKS CASCADE;
DROP TABLE IF EXISTS RENTS CASCADE;

CREATE TABLE IF NOT EXISTS USERS (
    USERNAME VARCHAR(10) PRIMARY KEY,
    FIRST_NAME TEXT NOT NULL,
    LAST_NAME TEXT NOT NULL,
    EMAIL TEXT NOT NULL,
    PASSWORD VARCHAR(50) NOT NULL,
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
INSERT INTO USERS(USERNAME, FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, PICTURE) VALUES ('ahmad', 'Ahmad', 'Sabbah', 'sth@gmail.com', '123456', 'picture');
INSERT INTO USERS(USERNAME, FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, PICTURE) VALUES ('mohd', 'Mohd', 'Sabbah', 'sth@gmail.com', '123456', 'picture');
INSERT INTO BOOKS(OWNER, NAME, PICTURE, AUTHOR) VALUES ('ahmad', 'land of sand oranges', 'photo', 'Ghassan');
INSERT INTO BOOKS(OWNER, NAME, PICTURE, AUTHOR) VALUES ('mohd', '1984', 'photo', 'Ghassan');
INSERT INTO RENTS(BOOK_ID, RENTER) VALUES (1, 'ahmad');


COMMIT;