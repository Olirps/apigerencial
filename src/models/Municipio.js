// src/models/Municipio.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const UF = require('./Uf');

const Municipio = sequelize.define('Municipio', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  codMunIBGE: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  codUfId: {
    type: DataTypes.INTEGER,
    references: {
      model: UF,
      key: 'codIBGE',
    },
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
}, {
  tableName: 'municipio',
  timestamps: true,
});
Municipio.associate = (models) => {
  Municipio.belongsTo(models.UF, {
    foreignKey: 'codUfId',
    as: 'uf',
  });
};

module.exports = Municipio;
