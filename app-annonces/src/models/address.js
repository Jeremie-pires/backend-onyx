const { Model } = require('sequelize');

const Address = (sequelize, DataTypes) => {
    class Address extends Model {
        static associate(model) {
            this.hasMany(model.Account, { foreignKey: 'address_id', as: 'Accounts' });
            this.hasMany(model.Event, { foreignKey: 'address_id', as: 'Events' });
        }
    }
    Address.init({
        id: { type: DataTypes.STRING(255), allowNull: false, primaryKey: true },
        number: { type: DataTypes.STRING(255), allowNull: false },
        street: { type: DataTypes.STRING(255), allowNull: false },
        city: { type: DataTypes.STRING(255), allowNull: false },
        city_code: { type: DataTypes.STRING(255), allowNull: false },
        building: { type: DataTypes.STRING(255), allowNull: true },
        floor: { type: DataTypes.STRING(255), allowNull: true },
        appartment: { type: DataTypes.STRING(255), allowNull: true }
    }, { modelName: 'Address', sequelize });
    return Address;
}
module.exports = Address;
