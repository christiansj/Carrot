const createTestRecord = require('./functions/createTestRecord');
const deleteLastRecord = require('./functions/deleteLastRecord');
const testGet = require('./functions/testGet');
const testPost = require('./functions/testPost');
const testDelete = require('./functions/testDelete');
const testPut = require('./functions/testPut');
const getLastInsertId = require('./functions/getLastInsertId');
const resetAutoIncrement = require('./functions/resetAutoIncrement');
const getMaxId = require('./functions/getMaxId');
module.exports ={
    createTestRecord,
    deleteLastRecord,
    testGet,
    testPost,
    testPut, 
    testDelete,
    getLastInsertId,
    resetAutoIncrement,
    getMaxId
}