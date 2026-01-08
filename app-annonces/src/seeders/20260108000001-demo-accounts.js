'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('Password123!', 10);
    
    await queryInterface.bulkInsert('Accounts', [
      {
        name: 'Dupont',
        firstname: 'Jean',
        email: 'jean.dupont@example.com',
        password: hashedPassword,
        phone: '0612345678',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Martin',
        firstname: 'Marie',
        email: 'marie.martin@example.com',
        password: hashedPassword,
        phone: '0623456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bernard',
        firstname: 'Pierre',
        email: 'pierre.bernard@example.com',
        password: hashedPassword,
        phone: '0634567890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dubois',
        firstname: 'Sophie',
        email: 'sophie.dubois@example.com',
        password: hashedPassword,
        phone: '0645678901',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Thomas',
        firstname: 'Luc',
        email: 'luc.thomas@example.com',
        password: hashedPassword,
        phone: '0656789012',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Accounts', null, {});
  }
};
