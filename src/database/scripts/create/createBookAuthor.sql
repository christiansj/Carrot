DROP TABLE IF EXISTS BookAuthor;
CREATE TABLE BookAuthor(
	bookId INT(11),
	authorId INT(11),
	PRIMARY KEY(bookId, authorId),
	CONSTRAINT fk_bookauthor_bookid
		FOREIGN KEY(bookId) REFERENCES Book(bookId) 
		ON DELETE CASCADE,
	CONSTRAINT fk_bookauthor_authorid
		FOREIGN KEY(authorId) REFERENCES User(userId) 
		ON DELETE RESTRICT 
);