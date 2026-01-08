const { Model } = require('sequelize');

const Artist = (sequelize, DataTypes) => {
    class Artist extends Model {
        static associate(model) {
            this.belongsToMany(model.Event, { through: 'Event_Artists', foreignKey: 'artist_id', otherKey: 'event_id', as: 'Events' });
            this.hasMany(model.Link, { foreignKey: 'artist_id', as: 'Links' });
        }
    }
    Artist.init({
        id: { type: DataTypes.STRING(255), allowNull: false, primaryKey: true },
        name: { type: DataTypes.STRING(255), allowNull: false },
        description: { type: DataTypes.STRING(255), allowNull: false }
    }, { modelName: 'Artist', sequelize });
    return Artist;
}
module.exports = Artist;
