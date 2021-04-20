'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.CronogramaSemestral,{foreignKey: {name: 'COD_CURSO',allowNull: false}})
      this.hasMany(models.Fase,{foreignKey:{name:'COD_CURSO'}})
      this.hasMany(models.Tcc,{foreignKey:{name:'COD_CURSO'}})
    }
  };
  curso.init({
    id:{
      type: Sequelize.INTEGER,
      field: 'COD_CURSO',
      primaryKey: true,
      autoIncrement:true
    },
    nomcurso: {
      type: Sequelize.STRING(50),
      field: 'NOM_CURSO'
    }
  }, {
    sequelize,
    modelName: 'Curso',
    freezeTableName: true

  },);
  return curso;
};