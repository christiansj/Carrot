const request = require('supertest');
const app = require('./../../../../server');

module.exports = (url, data, statusCode, done = null) => {
    request(app)
        .put(url)
        .send(data)
        .set('Accept', 'application/json')
        // .expect('Content-Type', expectVal)
        .expect(statusCode)
        .end((err, res) => {
            err ? done.fail(err) : done()
        })
}