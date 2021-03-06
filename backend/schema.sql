#CREATE SCHEMA `preibdev` ;
USE preibdev;

CREATE TABLE mentors (
    id BINARY(16) DEFAULT (UUID_TO_BIN(UUID())) PRIMARY KEY NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    country VARCHAR(70) NOT NULL, -- Country with the longest name has 56 characters
    mentor_description VARCHAR(1000) NOT NULL,
    timezone VARCHAR(20) NOT NULL,
    email VARCHAR(70) NOT NULL,
    ibYear INTEGER,
    image_url VARCHAR(150) NOT NULL,
    banner_url VARCHAR(120) NOT NULL,
    rating INT DEFAULT 4 NOT NULL
);

CREATE TABLE courses (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(55),
    CONSTRAINT courses_unique UNIQUE (course_name)
);

CREATE TABLE course_mentor_join (
    course_id INT,
    mentor_id BINARY(16),
    confidence INT NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(id)
		ON DELETE CASCADE
        ON UPDATE CASCADE,
	FOREIGN KEY (mentor_id) REFERENCES mentors(id)
		ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE languages (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    language_name VARCHAR(70),
    CONSTRAINT languages_unique UNIQUE (language_name)
);

CREATE TABLE language_mentor_join (
    language_id INT,
    mentor_id BINARY(16),
    FOREIGN KEY (language_id) REFERENCES languages(id)
		ON DELETE CASCADE
        ON UPDATE CASCADE,
	FOREIGN KEY (mentor_id) REFERENCES mentors(id)
		ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE mentor_reviews (
	id BINARY(16) DEFAULT (UUID_TO_BIN(UUID())) NOT NULL PRIMARY KEY,
    mentor_uuid BINARY(16),
    rating REAL NOT NULL,
    review VARCHAR(500) NOT NULL,
    reviewer VARCHAR(100) NOT NULL,
    identity_details VARCHAR(100),
    FOREIGN KEY (mentor_uuid) REFERENCES mentors(id)
		ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE notes (
	id BINARY(16) DEFAULT (UUID_TO_BIN(UUID())) NOT NULL PRIMARY KEY,
    creator BINARY(16),
    creationDate DATE NOT NULL,
    title VARCHAR(100) NOT NULL,
    grade INTEGER,
    course INTEGER,
    mark INTEGER,
    link VARCHAR(400) NOT NULL,
    preview VARCHAR(150) NOT NULL,
    FOREIGN KEY (creator) REFERENCES mentors(id)
		ON DELETE CASCADE
        ON UPDATE CASCADE,
	FOREIGN KEY (course) REFERENCES courses(id)
		ON DELETE CASCADE
        ON UPDATE CASCADE
);
