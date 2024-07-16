'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class fotoetiqueta extends Model {
        static associate(models) {
            models.etiqueta.belongsToMany(models.foto, {
                through: 'fotoetiquetas',
                foreignKey: "etiqueta_id"
            });
        }
    }
    fotoetiqueta.init({
        foto_id: DataTypes.INTEGER,
        etiqueta_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'fotoetiqueta',
        tableName: 'fotoetiquetas'
    });
    return fotoetiqueta;
};
