const { Model } = require('sequelize');

const OrderItemMerch = (sequelize, DataTypes) => {
    class OrderItemMerch extends Model {
        static associate(model) {
            this.belongsTo(model.Order, { foreignKey: 'order_id', as: 'Order' });
            this.belongsTo(model.Product, { foreignKey: 'product_id', as: 'Product' });
        }
    }
    OrderItemMerch.init({
        id: { type: DataTypes.STRING(255), allowNull: false, primaryKey: true },
        order_id: { type: DataTypes.STRING(255), allowNull: false },
        product_id: { type: DataTypes.STRING(255), allowNull: false },
        quantity: { type: DataTypes.INTEGER, allowNull: false },
        price_sold_unit: { type: DataTypes.FLOAT, allowNull: false }
    }, { modelName: 'OrderItemMerch', sequelize });
    return OrderItemMerch;
}
module.exports = OrderItemMerch;
