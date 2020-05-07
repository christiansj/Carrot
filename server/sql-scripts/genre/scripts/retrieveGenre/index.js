function retrieve(field){
    if (!parseInt(field)) {
        return query("name")
    }
    return query("genreId")
}

const query  = (field) => `
    SELECT *
    FROM genre 
    WHERE ${field} = ?;
`;

module.exports = retrieve;