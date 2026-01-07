const { Model } = require('sequelize');

const Order = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(model) {
            this.belongsTo(model.Account, { foreignKey: 'account_id', as: 'Account' });
            this.hasMany(model.Ticket, { foreignKey: 'order_id', as: 'Tickets' });
            this.hasMany(model.OrderItemMerch, { foreignKey: 'order_id', as: 'OrderItemMerchs' });
        }
    }
    Order.init({
        id: { type: DataTypes.STRING(255), allowNull: false, primaryKey: true },
        account_id: { type: DataTypes.STRING(255), allowNull: false },
        date: { type: DataTypes.DATE, allowNull: false },
        status: { type: DataTypes.STRING(50), allowNull: false },
        total_price: { type: DataTypes.FLOAT, allowNull: false },
        billing_name: { type: DataTypes.STRING(255), allowNull: false },
        billing_firstname: { type: DataTypes.STRING(255), allowNull: false },
        billing_address: { type: DataTypes.STRING(255), allowNull: false }
    }, { modelName: 'Order', sequelize });
    return Order;
}
module.exports = Order;
