'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const t = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('Events', {
        id: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
          primaryKey: true
        },
        name: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
        },
        address_id: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
          references: {
            model: 'Addresses',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        date: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        description: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
        },
        price_standard: {
          type: Sequelize.DataTypes.FLOAT,
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
      await queryInterface.dropTable('Events', { transaction: t });
      await t.commit();
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }
};
