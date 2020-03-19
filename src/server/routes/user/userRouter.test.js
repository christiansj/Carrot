const { testGet, testPost, testDelete, testPut } = require('./../../util/test');
const { executeQuery } = require('./../../util');
const { getLastInsertId, deleteLastRecord, resetAutoIncrement } = require('./../../util/test');
const userScripts = require('./../../sql-scripts/user');
const { createTestUser } = require('./functions');

describe('userRouter', () => {
    beforeEach(() => {
        createTestUser(err => {
            if (err) {
                console.log(err)
                return;
            }
        });
    });
    test('buffer', () => {
        expect(true);
    });
    afterEach(() => {
        deleteLastRecord(userScripts.deleteRecord, 'user', 'userId')
        resetAutoIncrement('user', 'userId')
    })
});