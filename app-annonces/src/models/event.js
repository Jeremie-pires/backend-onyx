const { Model } = require('sequelize');

const Event = (sequelize, DataTypes) => {
    class Event extends Model {
        static associate(model) {
            this.belongsTo(model.Address, { foreignKey: 'address_id', as: 'Address' });
            this.belongsToMany(model.Artist, { through: 'Event_Artists', foreignKey: 'event_id', otherKey: 'artist_id', as: 'Artists' });
            this.hasMany(model.Ticket, { foreignKey: 'event_id', as: 'Tickets' });
        }
    }
    Event.init({
        id: { type: DataTypes.STRING(255), allowNull: false, primaryKey: true },
        name: { type: DataTypes.STRING(255), allowNull: false },
        address_id: { type: DataTypes.STRING(255), allowNull: false },
        date: { type: DataTypes.DATE, allowNull: false },
        description: { type: DataTypes.STRING(255), allowNull: false },
        price_standard: { type: DataTypes.FLOAT, allowNull: false }
    }, { modelName: 'Event', sequelize });
    return Event;
}
module.exports = Event;
