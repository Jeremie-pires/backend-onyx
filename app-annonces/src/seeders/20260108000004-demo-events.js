'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', [
      {
        id: '1',
        name: 'Rock Festival Paris 2026',
        description: 'Le plus grand festival de rock de l\'année',
        date: new Date('2026-06-15'),
        address_id: '1',
        price_standard: 89.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        name: 'Electronic Music Night',
        description: 'Soirée électro avec les meilleurs DJs',
        date: new Date('2026-07-20'),
        address_id: '3',
        price_standard: 45.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        name: 'Summer Pop Concert',
        description: 'Concert pop en plein air',
        date: new Date('2026-08-10'),
        address_id: '2',
        price_standard: 75.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4',
        name: 'Jazz & Blues Festival',
        description: 'Festival de jazz et blues avec des artistes internationaux',
        date: new Date('2026-09-05'),
        address_id: '4',
        price_standard: 65.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5',
        name: 'Alternative Rock Show',
        description: 'Concert de rock alternatif',
        date: new Date('2026-10-12'),
        address_id: '5',
        price_standard: 35.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
  }
};
