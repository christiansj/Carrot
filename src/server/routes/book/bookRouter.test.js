const { testGet, testPost,  testDelete, testPut  } = require('./../../util/test');
const { executeQuery } = require('./../../util');
const {getLastInsertId, deleteLastRecord, createTestRecord, resetAutoIncrement,} = require('./../../util/test');
const bookScripts = require('./../../sql-scripts/book');

describe('bookRouter', ()=>{
    describe('GET book/', ()=>{
        test('Should return books - 200', (done)=>{
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/book', expectedHeader, 200, done);
        });
    });

    describe('GET book/:bookId', ()=>{
        test('Should return all books - 200', (done)=>{
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/book/1', expectedHeader, 200, done);
        });
    });

    describe('GET table/', ()=>{
        test('Should return books for a table - 200', (done)=>{
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/book/table', expectedHeader, 200, done);
        });
    });

    describe('PUT book/:bookId', ()=>{
        beforeEach(()=>{
            const params = ['__put_book__', 'test', 11223388];
            createTestRecord(bookScripts.create, params);
        });

        test('Should update a book - 200', (done)=>{
            const data = {
                title: '__put_genre__',
                description: 'testing',
                ISBN: 11223388
            };
            getLastInsertId((err, id)=>{
                testPut(`/book/${id}`, data, 200, done);
            });
        });

        afterEach(() => {
            deleteLastRecord(bookScripts.deleteRecord)
        });
    });

    describe('DELETE book/:bookId', ()=>{
        beforeEach(()=>{
            const params = ['__delete_book__', 'test', 11223377];
            createTestRecord(bookScripts.create, params);
        });

        test('Should delete a book - 204', (done)=>{
            executeQuery('SELECT LAST_INSERT_ID()', [], (err, results)=>{
                var lastInsertId = results[0]['LAST_INSERT_ID()'];
             
                testDelete(`/book/${lastInsertId}`, 204, done);
            });
        });
    });

    describe('Nonexistent book tests - should return 404', ()=>{
        test('GET book/:bookId', (done)=>{
            const expectedHeader = 'text/html; charset=utf-8';
            testGet('/book/9999/', expectedHeader, 404, done);
        });

        test('PUT book/:bookId', (done)=>{
            const data = {
                title: '__bad_book__',
                description: 'bad!',
                ISBN: 11223377
            };
            testPut('/book/9999/', data, 404, done);
        }); 

        test('DELETE book/:bookId', (done)=>{
            testDelete('/book/9999/', 404, done);
        });
    });
});