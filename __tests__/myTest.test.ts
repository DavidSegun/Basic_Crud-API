const supertest = require('supertest');
const { describe, it, expect } = require('jest');


const app = require('../server');

export default function myTest() {
describe('GET /acronyms', () => {
  it('should return a list of acronyms', async () => {
    const response = await supertest(app).get('/acronyms');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);

    for (const acronym of response.body) {
      expect(acronym.acronym).toBeDefined();
      expect(acronym.definition).toBeDefined();
    }
  });
})
}
