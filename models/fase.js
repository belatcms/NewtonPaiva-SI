'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fase extends Model {
    
    static associate(models) {
      this.hasMany(models.CronogramaSemestral,{foreignKey: {name: 'COD_FASE_TCC',allowNull: false}})
      this.hasMany(models.Tcc,{foreignKey: {name:'COD_FASE'}})
      this.belongsTo(models.Curso,{foreignKey: {name:'COD_CURSO'}})
    }
  };
  fase.init({
    id:{
      type: Sequelize.INTEGER,
      field: 'COD_FASE',
      primaryKey: true,
      autoIncrement:true
    },
    fase: {
      type: Sequelize.STRING(100),
      field: 'DES_FASE_TCC'
    }
  }, {
    sequelize,
    modelName: 'Fase',
    freezeTableName: true

  });
  return fase;
};

