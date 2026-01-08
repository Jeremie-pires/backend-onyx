'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        accountId: 1,
        total_amount: 185.00,
        status: 'completed',
        order_date: new Date('2025-12-01'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        accountId: 2,
        total_amount: 114.99,
        status: 'completed',
        order_date: new Date('2025-12-15'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        accountId: 3,
        total_amount: 65.00,
        status: 'completed',
        order_date: new Date('2026-01-05'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        accountId: 4,
        total_amount: 135.00,
        status: 'processing',
        order_date: new Date('2026-01-10'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        accountId: 5,
        total_amount: 87.00,
        status: 'completed',
        order_date: new Date('2026-01-12'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
