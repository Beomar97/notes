DROP TABLE IF EXISTS NOTES;
CREATE TABLE IF NOT EXISTS NOTES (
    id                     VARCHAR(60)  DEFAULT RANDOM_UUID() PRIMARY KEY,
    title                  VARCHAR      NOT NULL,
    description            VARCHAR      NOT NULL
);