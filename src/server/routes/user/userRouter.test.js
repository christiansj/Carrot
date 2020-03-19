const { testGet, testPost, testDelete, testPut } = require('./../../util/test');
const { executeQuery } = require('./../../util');
const { getLastInsertId, deleteLastRecord, resetAutoIncrement, getMaxId } = require('./../../util/test');
const userScripts = require('./../../sql-scripts/user');
const { createTestUser } = require('./functions');

//TODO will come back to userRouter tests later
describe('userRouter', () => {
    describe('GET user/:userId', () => {
        beforeEach(() => {
            createTestUser('_test_user_2_', 'test2@example.com', err => {
                if (err) {
                    console.log(err)
                    return;
                }
            });
        });

        test('Should return a user - 200', (done) => {
            getMaxId('user', 'userId', (err, maxId) => {
                const expectedHeader = 'application/json; charset=utf-8';
                testGet(`/user/${maxId}`, expectedHeader, 200, done);
            });
        });


        afterEach(() => {
            deleteLastRecord(userScripts.deleteRecord, 'user', 'userId')
        });
    });

    //TODO have a better grasp of async before implementing
    // describe('PUT user/:userId', () => {
    //     beforeEach(() => {
    //         return createTestUser('_test_user_1_', 'test1@example.com', err => {
    //             if (err) {
    //                 console.log(err)
    //                 return;
    //             }
    //         });
    //     });

    //     test('Should return a user - 200', (done) => {
    //         getMaxId('user', 'userId', (err, id) => {
    //             id += 1;
    //             const expectedHeader = 'application/json; charset=utf-8';
    //             const data = {
    //                 username: '_test_me_',
    //                 firstName: 'Test',
    //                 lastName: 'Me',
    //                 role: 2
    //             };
    //             console.log(`putting up with ${id}`);
    //             testPut(`/user/${id}`, data, 200, done);
    //         });
    //     });

    //     afterEach(() => {
    //         deleteLastRecord(userScripts.deleteRecord, 'user', 'userId')

    //     });
    // });
});