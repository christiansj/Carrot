const { testGet, testPost, deleteLastRecord, createTestRecord, resetAutoIncrement, testDelete, testPut, getLastInsertId } = require('./../../util/test');
const { executeQuery } = require('./../../util');
const genreScripts = require('./../../sql-scripts/genre');

describe('genreRouter', () => {
    afterEach(()=>{
        resetAutoIncrement('genre', 'genreId')
    });

    describe('GET /genre/', () => {
        test('Should return all genres - 200', (done) => {
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/genre', expectedHeader, 200, done);
        });
    });


    describe('GET /genre/:genreId', () => {
        test('Should return a genre - 200', (done) => {
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/genre/1', expectedHeader, 200, done);
        });
    });


    describe('GET /genre/books/:genreId', () => {
        test('Should return a genre\'s books - 200', (done) => {
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/genre/books/1', expectedHeader, 200, done);
        });
    });

    describe('GET /genre/with-books', () => {
        test('Should return genres that have books - 200', (done) => {
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/genre/with-books', expectedHeader, 200, done);
        });
    });

    describe('GET /genre/create-form', () => {
        test('Should respond with a JSON for a genre create-form - 200', (done) => {
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/genre/create-form', expectedHeader, 200, done);
        });
    });

    describe('GET /genre/table', () => {
        test('Should respond with a genres for a table - 200', (done) => {
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/genre/table', expectedHeader, 200, done);
        });
    });

    describe('POST /genre/', () => {
        test('Should create a genre - 201', (done) => {
            let data = {
                name: 'Test Genre'
            };
            const expectedHeader = 'application/json; charset=utf-8';
            testPost('/genre/', data, expectedHeader, 201, done);
        });

        afterEach(() => {
            deleteLastRecord(genreScripts.deleteRecord, 'genre', 'genreId');
        });
    });

    describe('POST /genre/ (existing genre)', () => {
        beforeEach(() => {
            createTestRecord(genreScripts.create, ['__post_genre__']);
        });

        test('Should return BAD REQUEST on creating existing genre - 400', (done) => {
            let data = {
                name: '__post_genre__'
            };
            const expectedHeader = 'text/html; charset=utf-8';
            testPost('/genre/', data, expectedHeader, 400, done);
        });

        afterEach(() => {
            deleteLastRecord(genreScripts.deleteRecord, 'genre', 'genreId')
        });
    });

    
    describe('PUT /genre/:genreId', ()=>{
        beforeEach(() => {
            createTestRecord(genreScripts.create, ['__but_genre__']);
        });

        test('Should update a genre - 200', (done)=>{
            const data = {
                name: '__put_genre__'
            };
            getLastInsertId((err, id)=>{
                testPut(`/genre/${id}`, data, 200, done);
            });
        });

        afterEach(() => {
            deleteLastRecord(genreScripts.deleteRecord, 'genre', 'genreId')
        });
    });

    describe('DELETE /genre/:genreId', ()=>{
        beforeEach(()=>{
            createTestRecord(genreScripts.create, ['__delete_genre__']);
        });

        test('Should delete a test genre - 204', (done)=>{
            executeQuery('SELECT LAST_INSERT_ID()', [], (err, results)=>{
                var lastInsertId = results[0]['LAST_INSERT_ID()'];
             
                testDelete(`/genre/${lastInsertId}`, 204, done);
            });
        });
    });

    describe('Nonexistent genre tests - should return 404', ()=>{
        test('GET /genre/:genreId', (done) => {
            const expectedHeader = 'text/html; charset=utf-8';
            testGet('/genre/books/9999', expectedHeader, 404, done);
        });

        test('PUT /genre/:genreId', (done)=>{
            const data = {
                name: 'Bad Genre'
            };
            testPut('/genre/9999', data, 404, done);
        });

        test('DELETE /genre/:genreId', (done)=>{
            testDelete('/genre/9999', 404, done);
        });
    });
});