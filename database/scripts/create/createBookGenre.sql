DROP TABLE IF EXISTS BookGenre;
CREATE TABLE BookGenre(
	bookId INT(11),
	genreId INT(11),
	PRIMARY KEY(bookId, genreId),
	CONSTRAINT fk_bookgenre_bookid 
		FOREIGN KEY(bookId) 
		REFERENCES Book(bookId) 
			ON DELETE CASCADE,
	CONSTRAINT fk_bookgenre_genreid  
		FOREIGN KEY(genreId) 
		REFERENCES Genre(genreId)
			ON DELETE CASCADE
);