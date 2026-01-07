'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Addresses', {
      id: {
        type: Sequelize.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      number: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      city_code: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      building: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      floor: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      appartment: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Addresses');
  }
};
