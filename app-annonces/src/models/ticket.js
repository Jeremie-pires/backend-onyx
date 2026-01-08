const { Model } = require('sequelize');

const Ticket = (sequelize, DataTypes) => {
    class Ticket extends Model {
        static associate(model) {
            this.belongsTo(model.Event, { foreignKey: 'event_id', as: 'Event' });
            this.belongsTo(model.Order, { foreignKey: 'order_id', as: 'Order' });
            this.belongsTo(model.Account, { foreignKey: 'account_id', as: 'Account' });
        }
    }
    Ticket.init({
        id: { type: DataTypes.STRING(255), allowNull: false, primaryKey: true },
        qrcode: { type: DataTypes.STRING(255), allowNull: false, unique: true },
        event_id: { type: DataTypes.STRING(255), allowNull: false },
        order_id: { type: DataTypes.STRING(255), allowNull: false },
        price_sold: { type: DataTypes.FLOAT, allowNull: false },
        account_id: { type: DataTypes.STRING(255), allowNull: false }
    }, { modelName: 'Ticket', sequelize });
    return Ticket;
}
module.exports = Ticket;
