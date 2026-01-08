'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const t = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('Orders', {
        id: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
          primaryKey: true
        },
        account_id: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
          references: {
            model: 'Accounts',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        date: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        status: {
          type: Sequelize.DataTypes.STRING(50),
          allowNull: false,
        },
        total_price: {
          type: Sequelize.DataTypes.FLOAT,
          allowNull: false,
        },
        billing_name: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
        },
        billing_firstname: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
        },
        billing_address: {
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
      await queryInterface.dropTable('Orders', { transaction: t });
      await t.commit();
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }
};
