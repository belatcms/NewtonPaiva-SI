"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class entrega extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Usuario,{foreignKey: {name:'COD_USUARIO',allowNull: false}});
      this.belongsTo(models.CronogramaSemestral,{foreignKey: {name:'COD_CURSO_FASE_TCC',allowNull: false}});
      this.belongsTo(models.Tcc,{foreignKey: {name:'COD_TCC',allowNull: false}})

    }
  }
  entrega.init(
    {
      id: {
        field: "COD_ENTREGA",
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      docEntrega: { field: "DOC_ENTREGA", type: Sequelize.STRING(100) },
      desComentario: { field: "DES_COMENTARIO", type: Sequelize.STRING(100) },
      valNota: { field: "VAL_NOTA", type: Sequelize.DOUBLE },
      dtaEntrega: { field: "DTA_ENTREGA", type: Sequelize.DATE },
    },
    {
      sequelize,
      modelName: "Entrega",
      freezeTableName: true,
    }
  );
  return entrega;
};
