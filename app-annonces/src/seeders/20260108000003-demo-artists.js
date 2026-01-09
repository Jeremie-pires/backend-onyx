'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Artists', [
      {
        id: '1',
        name: 'The Rolling Stones',
        description: 'Legendary British rock band formed in London in 1962',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        name: 'Daft Punk',
        description: 'French electronic music duo formed in 1993',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        name: 'Beyoncé',
        description: 'American singer, songwriter, and actress',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4',
        name: 'Pink Floyd',
        description: 'English rock band formed in London in 1965',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5',
        name: 'Coldplay',
        description: 'British rock band formed in London in 1996',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Artists', null, {});
  }
};
