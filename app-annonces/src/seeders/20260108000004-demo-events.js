'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', [
      {
        name: 'Rock Festival Paris 2026',
        description: 'Le plus grand festival de rock de l\'année',
        date: new Date('2026-06-15'),
        venue: 'Stade de France',
        city: 'Paris',
        price: 89.99,
        image_url: 'https://example.com/rock-festival.jpg',
        capacity: 50000,
        addressId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Electronic Music Night',
        description: 'Soirée électro avec les meilleurs DJs',
        date: new Date('2026-07-20'),
        venue: 'Le Zénith',
        city: 'Lyon',
        price: 45.00,
        image_url: 'https://example.com/electronic-night.jpg',
        capacity: 5000,
        addressId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Summer Pop Concert',
        description: 'Concert pop en plein air',
        date: new Date('2026-08-10'),
        venue: 'Parc des Princes',
        city: 'Paris',
        price: 75.00,
        image_url: 'https://example.com/summer-pop.jpg',
        capacity: 30000,
        addressId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jazz & Blues Festival',
        description: 'Festival de jazz et blues avec des artistes internationaux',
        date: new Date('2026-09-05'),
        venue: 'Opéra de Marseille',
        city: 'Marseille',
        price: 65.00,
        image_url: 'https://example.com/jazz-blues.jpg',
        capacity: 2000,
        addressId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alternative Rock Show',
        description: 'Concert de rock alternatif',
        date: new Date('2026-10-12'),
        venue: 'Le Bikini',
        city: 'Toulouse',
        price: 35.00,
        image_url: 'https://example.com/alt-rock.jpg',
        capacity: 1500,
        addressId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
  }
};
