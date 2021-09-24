import supertest from 'supertest';
import createApp from '../src/createApp';

const app = createApp();

describe('[API]', () => {
  it('should returns all movies', (done) => {
    supertest(app)
    .get('/api/v1/movies/')
    .expect(200)
    .expect(res => res.leght != 0)
    .end(done)
  });

  it('should returns current movie', (done) => {
    supertest(app)
    .get('/api/v1/movies/1')
    .expect(200)
    .expect(res => res.id === "1")
    .end(done)
  });
});