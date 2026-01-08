'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrderItemMerchs', [
      // Order 1 - Account 1
      {
        orderId: 1,
        productId: 6,
        quantity: 1,
        price: 35.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Order 2 - Account 2
      {
        orderId: 2,
        productId: 1,
        quantity: 1,
        price: 25.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Order 3 - Account 3
      {
        orderId: 3,
        productId: 2,
        quantity: 1,
        price: 20.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Order 4 - Account 4
      {
        orderId: 4,
        productId: 3,
        quantity: 1,
        price: 15.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Order 5 - Account 5
      {
        orderId: 5,
        productId: 5,
        quantity: 1,
        price: 12.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrderItemMerchs', null, {});
  }
};
