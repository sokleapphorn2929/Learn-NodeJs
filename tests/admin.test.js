import request from 'supertest';
import app from '../app.js';

test('GET /api/admin should return 401 when unauthorized', async () => {
  const res = await request(app).get('/api/admin');
  expect(res.statusCode).toBe(401);
});