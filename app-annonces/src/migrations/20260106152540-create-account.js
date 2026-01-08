'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const t = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('Accounts', {
        id: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
          primaryKey: true
        },
        role: {
          type: Sequelize.DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        name: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
        },
        firstname: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
        },
        email: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
        },
        password: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
        },
        address_id: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: true,
          references: {
            model: 'Addresses',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        },
        phone: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: true,
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
      await queryInterface.dropTable('Accounts', { transaction: t });
      await t.commit();
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }
};
