const { testGet } = require('./../../util/test');

describe('genreRouter', () => {
    describe('GET /genre/', ()=>{
        test('Should respond with list of all genres', (done) => {
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/genre', expectedHeader, 200, done);
        });
    });
   
   
    describe('GET /genre/:genreId', () => {
        test('Should respond with an existing genre', (done) => {
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/genre/1', expectedHeader, 200, done);
        });


        test('Should respond with a 404 status code', (done) => {
            const expectedHeader = 'text/html; charset=utf-8';
            testGet('/genre/9999', expectedHeader, 404, done);
        });
    });

   
    describe('GET /genre/books/:genreId', ()=>{
        test('Should respond with an existing genre\'s books', (done) => {
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/genre/books/1', expectedHeader, 200, done);
        });

        test('Should respond with a 404 status code', (done) => {
            const expectedHeader = 'text/html; charset=utf-8';
            testGet('/genre/books/9999', expectedHeader, 404, done);
        });
    });

    describe('GET /genre/with-books', ()=>{
        test('Should respond with genres that have books', (done) => {
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/genre/with-books', expectedHeader, 200, done);
        });
    });

    describe('GET /genre/create-form', ()=>{
        test('Should respond with a JSON describing a genre create-form', (done) => {
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/genre/create-form', expectedHeader, 200, done);
        });
    });
});