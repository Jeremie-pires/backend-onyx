'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const t = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('Tickets', {
        id: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
          primaryKey: true
        },
        qrcode: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
          unique: true
        },
        event_id: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
          references: {
            model: 'Events',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        order_id: {
          type: Sequelize.DataTypes.STRING(255),
          allowNull: false,
          references: {
            model: 'Orders',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        price_sold: {
          type: Sequelize.DataTypes.FLOAT,
          allowNull: false,
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
      await queryInterface.dropTable('Tickets', { transaction: t });
      await t.commit();
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }
};
