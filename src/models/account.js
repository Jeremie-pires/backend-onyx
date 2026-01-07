const { Model } = require('sequelize');

const Account = (sequelize, DataTypes) => {
    class Account extends Model {
        static associate(model) {
            this.belongsTo(model.Address, { foreignKey: 'address_id', as: 'Address' });
            this.hasMany(model.Order, { foreignKey: 'account_id', as: 'Orders' });
            this.hasMany(model.Ticket, { foreignKey: 'account_id', as: 'Tickets' });
        }
    }
    Account.init({
        id: { type: DataTypes.STRING(255), allowNull: false, primaryKey: true },
        role: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
        name: { type: DataTypes.STRING(255), allowNull: false },
        firstname: { type: DataTypes.STRING(255), allowNull: false },
        email: { type: DataTypes.STRING(255), allowNull: false },
        password: { type: DataTypes.STRING(255), allowNull: false },
        address_id: { type: DataTypes.STRING(255), allowNull: true },
        phone: { type: DataTypes.STRING(255), allowNull: true }
    }, { modelName: 'Account', sequelize });
    return Account;
}
module.exports = Account;
