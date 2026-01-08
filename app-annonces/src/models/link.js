const { Model } = require('sequelize');

const Link = (sequelize, DataTypes) => {
    class Link extends Model {
        static associate(model) {
            this.belongsTo(model.Artist, { foreignKey: 'artist_id', as: 'Artist' });
        }
    }
    Link.init({
        id: { type: DataTypes.STRING(255), allowNull: false, primaryKey: true },
        artist_id: { type: DataTypes.STRING(255), allowNull: false },
        name: { type: DataTypes.STRING(255), allowNull: false },
        url: { type: DataTypes.STRING(255), allowNull: false }
    }, { modelName: 'Link', sequelize });
    return Link;
}
module.exports = Link;
