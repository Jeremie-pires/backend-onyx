'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('EventArtists', [
      // Rock Festival Paris 2026
      { eventId: 1, artistId: 1, createdAt: new Date(), updatedAt: new Date() },
      { eventId: 1, artistId: 4, createdAt: new Date(), updatedAt: new Date() },
      
      // Electronic Music Night
      { eventId: 2, artistId: 2, createdAt: new Date(), updatedAt: new Date() },
      
      // Summer Pop Concert
      { eventId: 3, artistId: 3, createdAt: new Date(), updatedAt: new Date() },
      
      // Alternative Rock Show
      { eventId: 5, artistId: 5, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('EventArtists', null, {});
  }
};
