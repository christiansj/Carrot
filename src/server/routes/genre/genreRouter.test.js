const { testGet, testPost, deleteLastRecord, createTestRecord } = require('./../../util/test');

const genreScripts = require('./../../sql-scripts/genre');
// const genreScripts = require('./../../sql-scripts/genre');
describe('genreRouter', () => {

    describe('GET /genre/', () => {
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


    describe('GET /genre/books/:genreId', () => {
        test('Should respond with an existing genre\'s books', (done) => {
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/genre/books/1', expectedHeader, 200, done);
        });

        test('Should respond with a 404 status code', (done) => {
            const expectedHeader = 'text/html; charset=utf-8';
            testGet('/genre/books/9999', expectedHeader, 404, done);
        });
    });

    describe('GET /genre/with-books', () => {
        test('Should respond with genres that have books', (done) => {
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/genre/with-books', expectedHeader, 200, done);
        });
    });

    describe('GET /genre/create-form', () => {
        test('Should respond with a JSON for a genre create-form', (done) => {
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/genre/create-form', expectedHeader, 200, done);
        });
    });

    describe('GET genre/table', () => {
        test('Should respond with a genres for a table', (done) => {
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/genre/table', expectedHeader, 200, done);
        });
    });

    describe('POST genre/', () => {
        afterEach(() => {
            deleteLastRecord(genreScripts.deleteRecord)
        });
        test('Should create a genre and return 201', (done) => {
            let data = {
                name: 'Test Genre'
            };
            const expectedHeader = 'application/json; charset=utf-8';
            testPost('/genre/', data, expectedHeader, 201, done);
        });
    });

    describe('POST genre/ (existing genre)', ()=>{
        beforeEach(()=>{
            createTestRecord(genreScripts.create, ['__test_genre__']);
        });
        afterEach(() => {
            deleteLastRecord(genreScripts.deleteRecord)
        });
        test('Should return 400 on existing genre', (done)=>{
            let data = {
                name: '__test_genre__'
            };
            const expectedHeader = 'text/html; charset=utf-8';
            testPost('/genre/', data, expectedHeader, 400, done);
        });
    })


});