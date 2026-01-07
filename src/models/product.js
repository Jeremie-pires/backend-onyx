const { Model } = require('sequelize');

const Product = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(model) {
            this.hasMany(model.OrderItemMerch, { foreignKey: 'product_id', as: 'OrderItemMerchs' });
        }
    }
    Product.init({
        id: { type: DataTypes.STRING(255), allowNull: false, primaryKey: true },
        name: { type: DataTypes.STRING(255), allowNull: false },
        stock: { type: DataTypes.INTEGER, allowNull: false },
        price: { type: DataTypes.FLOAT, allowNull: false }
    }, { modelName: 'Product', sequelize });
    return Product;
}
module.exports = Product;
