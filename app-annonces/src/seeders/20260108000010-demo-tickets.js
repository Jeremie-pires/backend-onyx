'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tickets', [
      {
        id: '1',
        qrcode: 'QR-' + Date.now() + '-1',
        event_id: '1',
        order_id: '1',
        account_id: '1',
        price_sold: 150.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        qrcode: 'QR-' + Date.now() + '-2',
        event_id: '1',
        order_id: '2',
        account_id: '2',
        price_sold: 89.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        qrcode: 'QR-' + Date.now() + '-3',
        event_id: '2',
        order_id: '3',
        account_id: '3',
        price_sold: 45.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4',
        qrcode: 'QR-' + Date.now() + '-4',
        event_id: '3',
        order_id: '4',
        account_id: '4',
        price_sold: 120.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5',
        qrcode: 'QR-' + Date.now() + '-5',
        event_id: '3',
        order_id: '5',
        account_id: '5',
        price_sold: 75.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tickets', null, {});
  }
};
