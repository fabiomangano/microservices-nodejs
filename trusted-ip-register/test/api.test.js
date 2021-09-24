import supertest from 'supertest';
import createApp from '../src/createApp';

const app = createApp();

describe('[API]', () => {
  it('should returns all trusted ips', (done) => {
    supertest(app)
    .get('/trusted-ip-register')
    .expect('Content-Type', /json/)
    .expect(200,["192.168.1.0", "192.169.1.1", "192.169.1.2", "192.169.1.3", "192.169.1.4"])
    .end(done)
  });
});