'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Addresses', [
      {
        id: '1',
        number: '123',
        street: 'Rue de la Paix',
        city: 'Paris',
        city_code: '75001',
        building: null,
        floor: null,
        appartment: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        number: '45',
        street: 'Avenue des Champs-Élysées',
        city: 'Paris',
        city_code: '75008',
        building: null,
        floor: null,
        appartment: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        number: '78',
        street: 'Boulevard Saint-Germain',
        city: 'Lyon',
        city_code: '69001',
        building: null,
        floor: null,
        appartment: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4',
        number: '12',
        street: 'Rue du Commerce',
        city: 'Marseille',
        city_code: '13001',
        building: null,
        floor: null,
        appartment: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5',
        number: '90',
        street: 'Place de la République',
        city: 'Toulouse',
        city_code: '31000',
        building: null,
        floor: null,
        appartment: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addresses', null, {});
  }
};
