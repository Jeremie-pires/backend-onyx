'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tickets', [
      // Tickets pour Rock Festival Paris 2026
      {
        eventId: 1,
        accountId: 1,
        ticket_type: 'VIP',
        price: 150.00,
        purchase_date: new Date('2025-12-01'),
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventId: 1,
        accountId: 2,
        ticket_type: 'Standard',
        price: 89.99,
        purchase_date: new Date('2025-12-15'),
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Tickets pour Electronic Music Night
      {
        eventId: 2,
        accountId: 3,
        ticket_type: 'Standard',
        price: 45.00,
        purchase_date: new Date('2026-01-05'),
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Tickets pour Summer Pop Concert
      {
        eventId: 3,
        accountId: 4,
        ticket_type: 'VIP',
        price: 120.00,
        purchase_date: new Date('2026-01-10'),
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        eventId: 3,
        accountId: 5,
        ticket_type: 'Standard',
        price: 75.00,
        purchase_date: new Date('2026-01-12'),
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Tickets pour Jazz Festival
      {
        eventId: 4,
        accountId: 1,
        ticket_type: 'Standard',
        price: 65.00,
        purchase_date: new Date('2026-01-08'),
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tickets', null, {});
  }
};
