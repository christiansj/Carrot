DROP TABLE IF EXISTS BookAuthor;
DROP TABLE IF EXISTS BookGenre;
DROP TABLE IF EXISTS Book;
CREATE TABLE Book(
	bookId INT(11) NOT NULL AUTO_INCREMENT,
	title VARCHAR(255),
	description VARCHAR(2048),
	dateCreated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	dateUpdated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	ISBN INT(13) NOT NULL,
	folderHash INT(11),
	PRIMARY KEY(bookId),
	UNIQUE(ISBN)
);