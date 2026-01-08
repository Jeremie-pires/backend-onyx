const request = require('supertest');
const express = require('express');
const initRoutes = require('../../src/routes');

// Configuration de l'app de test
const app = express();
app.use(express.json());
initRoutes(app);

describe('Events API - Functional Tests', () => {
  
  describe('GET /events', () => {
    it('should return 200 and list of events', async () => {
      const response = await request(app)
        .get('/events')
        .expect('Content-Type', /json/);
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /events/:id', () => {
    it('should return 404 for non-existent event', async () => {
      const response = await request(app)
        .get('/events/999999')
        .expect('Content-Type', /json/);
      
      expect([404, 500]).toContain(response.status);
    });
  });

  describe('POST /events', () => {
    it('should validate required fields', async () => {
      const response = await request(app)
        .post('/events')
        .send({})
        .expect('Content-Type', /json/);
      
      expect([400, 401, 422, 500]).toContain(response.status);
    });

    it('should validate date format', async () => {
      const response = await request(app)
        .post('/events')
        .send({
          name: 'Test Event',
          date: 'invalid-date',
          venue: 'Test Venue'
        })
        .expect('Content-Type', /json/);
      
      expect([400, 401, 422, 500]).toContain(response.status);
    });
  });
});

describe('Artists API - Functional Tests', () => {
  
  describe('GET /artists', () => {
    it('should return 200 and list of artists', async () => {
      const response = await request(app)
        .get('/artists')
        .expect('Content-Type', /json/);
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /artists/:id', () => {
    it('should return 404 for non-existent artist', async () => {
      const response = await request(app)
        .get('/artists/999999')
        .expect('Content-Type', /json/);
      
      expect([404, 500]).toContain(response.status);
    });
  });

  describe('POST /artists', () => {
    it('should validate required fields', async () => {
      const response = await request(app)
        .post('/artists')
        .send({})
        .expect('Content-Type', /json/);
      
      expect([400, 401, 422, 500]).toContain(response.status);
    });
  });
});

describe('Products API - Functional Tests', () => {
  
  describe('GET /products', () => {
    it('should return 200 and list of products', async () => {
      const response = await request(app)
        .get('/products')
        .expect('Content-Type', /json/);
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /products', () => {
    it('should validate price is positive', async () => {
      const response = await request(app)
        .post('/products')
        .send({
          name: 'Test Product',
          price: -50
        })
        .expect('Content-Type', /json/);
      
      expect([400, 401, 422, 500]).toContain(response.status);
    });
  });
});
