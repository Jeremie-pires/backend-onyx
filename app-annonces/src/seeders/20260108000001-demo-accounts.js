'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('Password123!', 10);
    
    await queryInterface.bulkInsert('Accounts', [
      {
        id: '1',
        role: 'user',
        name: 'Dupont',
        firstname: 'Jean',
        email: 'jean.dupont@example.com',
        password: hashedPassword,
        phone: '0612345678',
        address_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        role: 'user',
        name: 'Martin',
        firstname: 'Marie',
        email: 'marie.martin@example.com',
        password: hashedPassword,
        phone: '0623456789',
        address_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        role: 'user',
        name: 'Bernard',
        firstname: 'Pierre',
        email: 'pierre.bernard@example.com',
        password: hashedPassword,
        phone: '0634567890',
        address_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4',
        role: 'user',
        name: 'Dubois',
        firstname: 'Sophie',
        email: 'sophie.dubois@example.com',
        password: hashedPassword,
        phone: '0645678901',
        address_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5',
        role: 'admin',
        name: 'Thomas',
        firstname: 'Luc',
        email: 'luc.thomas@example.com',
        password: hashedPassword,
        phone: '0656789012',
        address_id: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Accounts', null, {});
  }
};
