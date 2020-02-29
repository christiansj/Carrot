DROP TABLE IF EXISTS BookAuthor;
DROP TABLE IF EXISTS User;
/* role: 
		1 Normal
		2 Author
		3 Admin
		4 Webmaster
		5 Deactivated
		6 Banned
*/
CREATE TABLE User(
	userId INT(11) AUTO_INCREMENT,
	username VARCHAR(25),
	firstName VARCHAR(100),
	lastName VARCHAR(100),
	email VARCHAR(100) NOT NULL,
	password VARCHAR(100) NOT NULL,
	description VARCHAR(255),
	role TINYINT(1) DEFAULT 1,
	creationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	lastLoginDate TIMESTAMP,
	balance DECIMAL(10,0) DEFAULT 0,
	PRIMARY KEY(userId),
	UNIQUE(username),
	UNIQUE(email), 
	CONSTRAINT con_balance
		CHECK(balance >= 0)
);