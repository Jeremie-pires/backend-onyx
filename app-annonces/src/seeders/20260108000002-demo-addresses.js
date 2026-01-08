'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Addresses', [
      {
        address: '123 Rue de la Paix',
        city: 'Paris',
        postal_code: '75001',
        country: 'France',
        accountId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '45 Avenue des Champs-Élysées',
        city: 'Paris',
        postal_code: '75008',
        country: 'France',
        accountId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '78 Boulevard Saint-Germain',
        city: 'Lyon',
        postal_code: '69001',
        country: 'France',
        accountId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '12 Rue du Commerce',
        city: 'Marseille',
        postal_code: '13001',
        country: 'France',
        accountId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        address: '90 Place de la République',
        city: 'Toulouse',
        postal_code: '31000',
        country: 'France',
        accountId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addresses', null, {});
  }
};
