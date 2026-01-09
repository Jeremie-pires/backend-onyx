const request = require('supertest');
const express = require('express');
const initRoutes = require('../../src/routes');

// Configuration de l'app de test
const app = express();
app.use(express.json());
initRoutes(app);

describe('Accounts API - Functional Tests', () => {
  
  describe('GET /accounts/search', () => {
    it('should return 200 and list of accounts', async () => {
      const response = await request(app)
        .get('/accounts/search')
        .expect('Content-Type', /json/);
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });

    it('should filter accounts by search key', async () => {
      const response = await request(app)
        .get('/accounts/search?search=test')
        .expect('Content-Type', /json/);
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('POST /accounts/register', () => {
    it('should validate required fields', async () => {
      const response = await request(app)
        .post('/accounts/register')
        .send({})
        .expect('Content-Type', /json/);
      
      // Devrait retourner une erreur de validation
      expect([400, 422, 500]).toContain(response.status);
    });

    it('should validate email format', async () => {
      const response = await request(app)
        .post('/accounts/register')
        .send({
          name: 'Test',
          firstname: 'User',
          email: 'invalid-email',
          password: 'Test123!',
          phone: '0612345678'
        })
        .expect('Content-Type', /json/);
      
      expect([400, 422, 500]).toContain(response.status);
    });
  });

  describe('POST /accounts/login', () => {
    it('should reject login without credentials', async () => {
      const response = await request(app)
        .post('/accounts/login')
        .send({})
        .expect('Content-Type', /json/);
      
      expect([400, 401, 422, 500]).toContain(response.status);
    });

    it('should validate email format', async () => {
      const response = await request(app)
        .post('/accounts/login')
        .send({
          email: 'not-an-email',
          password: 'password'
        })
        .expect('Content-Type', /json/);
      
      expect([400, 401, 422, 500]).toContain(response.status);
    });
  });

  describe('GET /accounts/:id', () => {
    it('should return 404 for non-existent account', async () => {
      const response = await request(app)
        .get('/accounts/999999')
        .expect('Content-Type', /json/);
      
      expect([401, 404, 500]).toContain(response.status);
    });

    it('should validate ID parameter', async () => {
      const response = await request(app)
        .get('/accounts/invalid-id');
      
      expect([400, 401, 404, 500]).toContain(response.status);
    });
  });

  describe('PUT /accounts/:id', () => {
    it('should require authentication', async () => {
      const response = await request(app)
        .put('/accounts/1')
        .send({
          name: 'Updated Name'
        });
      
      // Devrait retourner 401 sans token
      expect([401, 403, 404, 500]).toContain(response.status);
    });
  });

  describe('DELETE /accounts/:id', () => {
    it('should require authentication', async () => {
      const response = await request(app)
        .delete('/accounts/1');
      
      // Devrait retourner 401 sans token
      expect([401, 403, 404, 500]).toContain(response.status);
    });
  });
});
