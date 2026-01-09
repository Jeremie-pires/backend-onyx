'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Event_Artists', [
      // Rock Festival Paris 2026
      { event_id: '1', artist_id: '1', createdAt: new Date(), updatedAt: new Date() },
      { event_id: '1', artist_id: '4', createdAt: new Date(), updatedAt: new Date() },
      
      // Electronic Music Night
      { event_id: '2', artist_id: '2', createdAt: new Date(), updatedAt: new Date() },
      
      // Summer Pop Concert
      { event_id: '3', artist_id: '3', createdAt: new Date(), updatedAt: new Date() },
      
      // Alternative Rock Show
      { event_id: '5', artist_id: '5', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Event_Artists', null, {});
  }
};
