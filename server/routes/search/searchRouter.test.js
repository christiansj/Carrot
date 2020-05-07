const { testGet } = require('./../../util/test');

describe('searchRouter', ()=>{
    describe('GET /search/:tableName/:searchQuery', ()=>{
        test('Should return book search results - 200', (done)=>{
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/search/book/the', expectedHeader, 200, done);
        });

        test('Should return NOT FOUND on bad table name - 404', (done)=>{
            const expectedHeader = 'text/html; charset=utf-8';
            testGet('/search/bad_name/the', expectedHeader, 404, done);
        });
    });
});