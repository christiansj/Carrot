module.exports = `
    SELECT DISTINCT g.name, g.genreId 
    from Genre g, BookGenre bg
    WHERE (
        g.genreId = bg.genreId
    )

`;