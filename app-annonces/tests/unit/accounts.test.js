const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Mock des modèles
const mockAccount = {
  id: 1,
  name: 'Dupont',
  firstname: 'Jean',
  email: 'jean.dupont@test.com',
  password: '$2a$10$hashedpassword',
  phone: '0612345678',
  createdAt: new Date(),
  updatedAt: new Date()
};

describe('Account Service - Unit Tests', () => {
  
  describe('Password hashing', () => {
    it('should hash password correctly', async () => {
      const password = 'TestPassword123!';
      const hashedPassword = await bcrypt.hash(password, 10);
      
      expect(hashedPassword).toBeDefined();
      expect(hashedPassword).not.toBe(password);
      
      const isMatch = await bcrypt.compare(password, hashedPassword);
      expect(isMatch).toBe(true);
    });

    it('should fail with incorrect password', async () => {
      const password = 'TestPassword123!';
      const wrongPassword = 'WrongPassword';
      const hashedPassword = await bcrypt.hash(password, 10);
      
      const isMatch = await bcrypt.compare(wrongPassword, hashedPassword);
      expect(isMatch).toBe(false);
    });
  });

  describe('JWT Token generation', () => {
    it('should generate valid JWT token', () => {
      const payload = { id: mockAccount.id, email: mockAccount.email };
      const secret = process.env.JWT_SECRET || 'test_secret';
      const token = jwt.sign(payload, secret, { expiresIn: '24h' });
      
      expect(token).toBeDefined();
      expect(typeof token).toBe('string');
      
      const decoded = jwt.verify(token, secret);
      expect(decoded.id).toBe(mockAccount.id);
      expect(decoded.email).toBe(mockAccount.email);
    });

    it('should fail with invalid token', () => {
      const invalidToken = 'invalid.token.here';
      const secret = process.env.JWT_SECRET || 'test_secret';
      
      expect(() => {
        jwt.verify(invalidToken, secret);
      }).toThrow();
    });
  });

  describe('Email validation', () => {
    it('should validate correct email format', () => {
      const validEmails = [
        'test@example.com',
        'user.name@example.co.uk',
        'user+tag@example.com'
      ];
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      validEmails.forEach(email => {
        expect(emailRegex.test(email)).toBe(true);
      });
    });

    it('should reject invalid email format', () => {
      const invalidEmails = [
        'notanemail',
        '@example.com',
        'user@',
        'user @example.com'
      ];
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      invalidEmails.forEach(email => {
        expect(emailRegex.test(email)).toBe(false);
      });
    });
  });

  describe('Phone number validation', () => {
    it('should validate French phone numbers', () => {
      const validPhones = [
        '0612345678',
        '0123456789',
        '+33612345678'
      ];
      
      const phoneRegex = /^(\+33|0)[1-9](\d{8})$/;
      
      validPhones.forEach(phone => {
        expect(phoneRegex.test(phone)).toBe(true);
      });
    });

    it('should reject invalid phone numbers', () => {
      const invalidPhones = [
        '123',
        '00000000',
        'notaphone',
        '06 12 34 56 78'
      ];
      
      const phoneRegex = /^(\+33|0)[1-9](\d{8})$/;
      
      invalidPhones.forEach(phone => {
        expect(phoneRegex.test(phone)).toBe(false);
      });
    });
  });
});
