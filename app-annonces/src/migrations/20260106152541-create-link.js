'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const t = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('Links', {
        id: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
          primaryKey: true
        },
        artist_id: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
          references: {
            model: 'Artists',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        name: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
        },
        url: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE
        }
      }, { transaction: t });
      await t.commit();
    } catch (error) {
      await t.rollback();
      throw error;
    }
  },

  async down (queryInterface, Sequelize) {
    const t = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('Links', { transaction: t });
      await t.commit();
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }
};
