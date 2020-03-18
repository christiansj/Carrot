const request = require('supertest');
const app = require('./../../../../server');

module.exports = function (url, expectVal, statusCode, done) {
    request(app)
        .get(url)
        .set('Accept', 'application/json')
        .expect('Content-Type', expectVal)
        .expect(statusCode)
        .end(err => {
            err ? done.fail(err) : done()
        })
}
