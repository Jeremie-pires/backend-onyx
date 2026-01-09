'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        id: '1',
        account_id: '1',
        date: new Date('2025-12-01'),
        status: 'completed',
        total_price: 150.00,
        billing_name: 'Dupont',
        billing_firstname: 'Jean',
        billing_address: '123 Rue de la Paix, 75001 Paris',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '2',
        account_id: '2',
        date: new Date('2025-12-15'),
        status: 'completed',
        total_price: 89.99,
        billing_name: 'Martin',
        billing_firstname: 'Marie',
        billing_address: '45 Avenue des Champs-Élysées, 75008 Paris',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '3',
        account_id: '3',
        date: new Date('2026-01-05'),
        status: 'completed',
        total_price: 45.00,
        billing_name: 'Bernard',
        billing_firstname: 'Pierre',
        billing_address: '78 Boulevard Saint-Germain, 69001 Lyon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '4',
        account_id: '4',
        date: new Date('2026-01-10'),
        status: 'processing',
        total_price: 120.00,
        billing_name: 'Dubois',
        billing_firstname: 'Sophie',
        billing_address: '12 Rue du Commerce, 13001 Marseille',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5',
        account_id: '5',
        date: new Date('2026-01-12'),
        status: 'completed',
        total_price: 75.00,
        billing_name: 'Thomas',
        billing_firstname: 'Luc',
        billing_address: '90 Place de la République, 31000 Toulouse',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
