import supertest from 'supertest';
import createApp from '../src/createApp';

const app = createApp();

describe('[API]', () => {
  it('should returns all endpoints', (done) => {
    supertest(app)
    .get('/service-register')
    .expect('Content-Type', /json/)
    .expect(200, {
      "assets-service": "http://assets-service:3002",
      "movie-service": "http://movie-service:3003",
      "auth-service": "http://auth-service:3004",
      'ticket-service': 'http://ticket-service:3007'
    })
    .end(done)
  });
});