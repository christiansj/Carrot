const request = require('supertest');
const app = require('./../../../../server');

const testPost = (url, data, expectVal, statusCode, done = null) => {
    request(app)
        .post(url)
        .send(data)
        .set('Accept', 'application/json')
        .expect('Content-Type', expectVal)
        .expect(statusCode)
        .expect(hasInsertIdKey)
        .end((err, res) => {

            if (err) {
                if (done === null) {
                    return;
                }
                done.fail(err);
                return;
            }
            done();
        })
}

function hasInsertIdKey(res) {
    if (!('insertId') in res.body) {
        throw new Error('missing insertId key');
    }
}

module.exports = testPost;