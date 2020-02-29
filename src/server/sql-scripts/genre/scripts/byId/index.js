module.exports = `
SELECT genreId, name
FROM genre 
WHERE genreId = ?
`