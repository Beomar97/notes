DROP TABLE IF EXISTS NOTES;
CREATE TABLE IF NOT EXISTS NOTES (
                                    id INT(4) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                    title VARCHAR(30),
                                    description VARCHAR(30),
                                    INDEX(title)
) engine=InnoDB;