USE preibdev;

CREATE TABLE mentors (
	id BINARY(16) DEfAULT (UUID_TO_BIN(UUID())) PRIMARY KEY NOT NULL,
	firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    city VARCHAR(100) NOT NULL, -- City with the longest name has 85 characters
    country VARCHAR(70) NOT NULL, -- Country with the longest name has 56 characters
	school VARCHAR(250) NOT NULL,
    mentor_description VARCHAR(250) NOT NULL,
    image_url VARCHAR(150) NOT NULL
);

CREATE TABLE courses (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(55)
);

CREATE TABLE course_mentor_join (
    course_id INT,
    mentor_id BINARY(16),
    FOREIGN KEY (course_id) REFERENCES courses(id)
		ON DELETE CASCADE
        ON UPDATE CASCADE,
	FOREIGN KEY (mentor_id) REFERENCES mentors(id)
		ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE languages (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    language_name VARCHAR(70)
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
