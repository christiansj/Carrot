const request = require('supertest');
const app = require('./../../../../server');

module.exports = function(url,  statusCode, done){
    request(app)
    .delete(url)
    .set('Accept', 'application/json')
    .expect(statusCode)
    .end(err => {
        err ? done.fail(err) : done()
    });
}