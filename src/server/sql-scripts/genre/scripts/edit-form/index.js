module.exports = `
    SELECT name 
    FROM Genre
    WHERE genreId = ?;
`;