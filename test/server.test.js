// server.test.js

const expect = require('./expect');
const request = require('./supertest');
const {ObjectId} = require('./mongodb');

const {app} = require('./../src/server');

// Example api endpoint test
describe('GET /activities', () => {
  it('should get all activities', (done) => {
    request(app)
      .get('/activities')
      .expect(200)
      .expect((res) => {
        expect(res.body.activities.length).toBe(0)
      })
      .end(done)
  })
});