DROP DATABASE IF EXISTS mock_carrot;
CREATE DATABASE mock_carrot;
use mock_carrot;
source scripts/create/createBook.sql
source scripts/insert/insert/insertBook.sql

source scripts/create/createUser.sql
source scripts/insert/insert/insertAuthor.sql

source scripts/create/createGenre.sql
source scripts/insert/insert/insertGenre.sql

source scripts/create/createBookGenre.sql
source scripts/insert/insert/insertBookGenre.sql

source scripts/create/createBookAuthor.sql
source scripts/insert/insert/insertBookAuthor.sql

source scripts/create/createBanUser.sql