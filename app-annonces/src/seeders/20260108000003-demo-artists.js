'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Artists', [
      {
        name: 'The Rolling Stones',
        genre: 'Rock',
        bio: 'Legendary British rock band formed in London in 1962',
        image_url: 'https://example.com/rolling-stones.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Daft Punk',
        genre: 'Electronic',
        bio: 'French electronic music duo formed in 1993',
        image_url: 'https://example.com/daft-punk.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Beyoncé',
        genre: 'Pop/R&B',
        bio: 'American singer, songwriter, and actress',
        image_url: 'https://example.com/beyonce.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pink Floyd',
        genre: 'Progressive Rock',
        bio: 'English rock band formed in London in 1965',
        image_url: 'https://example.com/pink-floyd.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Coldplay',
        genre: 'Alternative Rock',
        bio: 'British rock band formed in London in 1996',
        image_url: 'https://example.com/coldplay.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Artists', null, {});
  }
};
