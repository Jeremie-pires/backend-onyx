'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        id: '1',
        name: 'T-Shirt Rock Festival',
        price: 25.00,
        stock: 500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        name: 'Casquette Electronic Night',
        price: 20.00,
        stock: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        name: 'Poster Summer Pop',
        price: 15.00,
        stock: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4',
        name: 'Hoodie Jazz Festival',
        price: 45.00,
        stock: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5',
        name: 'Sac Tote Alternative Rock',
        price: 12.00,
        stock: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '6',
        name: 'Vinyle The Rolling Stones',
        price: 35.00,
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
