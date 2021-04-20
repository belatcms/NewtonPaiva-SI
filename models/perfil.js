'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class perfil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Usuario,{foreignKey:{name:'COD_PERFIL'}})
    }
  };
  perfil.init({
    id:{
      type: Sequelize.INTEGER,
      field: 'COD_PERFIL',
      primaryKey: true,
      autoIncrement:true
    },
    perfil: {
      type: Sequelize.STRING(100),
      field: 'DES_PERFIL'
    }
  }, {
    sequelize,
    modelName: 'Perfil',
    freezeTableName: true

  });
  return perfil;
};