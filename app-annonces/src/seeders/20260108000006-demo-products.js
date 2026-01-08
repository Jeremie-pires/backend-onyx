'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'T-Shirt Rock Festival',
        description: 'T-shirt officiel du Rock Festival Paris 2026',
        price: 25.00,
        stock: 500,
        category: 'Merchandise',
        image_url: 'https://example.com/tshirt-rock.jpg',
        eventId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Casquette Electronic Night',
        description: 'Casquette officielle de l\'événement',
        price: 20.00,
        stock: 300,
        category: 'Merchandise',
        image_url: 'https://example.com/cap-electronic.jpg',
        eventId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Poster Summer Pop',
        description: 'Poster collector du concert',
        price: 15.00,
        stock: 200,
        category: 'Merchandise',
        image_url: 'https://example.com/poster-pop.jpg',
        eventId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hoodie Jazz Festival',
        description: 'Sweat à capuche du Jazz & Blues Festival',
        price: 45.00,
        stock: 150,
        category: 'Merchandise',
        image_url: 'https://example.com/hoodie-jazz.jpg',
        eventId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sac Tote Alternative Rock',
        description: 'Sac en toile du concert',
        price: 12.00,
        stock: 400,
        category: 'Merchandise',
        image_url: 'https://example.com/tote-alt.jpg',
        eventId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vinyle The Rolling Stones',
        description: 'Album vinyle collector',
        price: 35.00,
        stock: 100,
        category: 'Music',
        image_url: 'https://example.com/vinyl-stones.jpg',
        eventId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
