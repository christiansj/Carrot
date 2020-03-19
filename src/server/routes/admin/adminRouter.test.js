const { testGet } = require('./../../util/test');

describe('adminRouter', ()=>{
    describe('GET /admin/tableNames', ()=>{
        test('Should return table names for admin database table - 200', (done)=>{
            const expectedHeader = 'application/json; charset=utf-8';
            testGet('/admin/tableNames', expectedHeader, 200, done);
        });
    });
});