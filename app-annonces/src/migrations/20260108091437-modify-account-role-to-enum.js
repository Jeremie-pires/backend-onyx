'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Changer le type de BOOLEAN vers STRING
    await queryInterface.changeColumn('Accounts', 'role', {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: 'user'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Accounts', 'role', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    });
  }
};
