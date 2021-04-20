'use strict';
const {
    Model,
    Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Perfil, { foreignKey: { name: 'COD_PERFIL' } })
            this.hasMany(models.Entrega, { foreignKey: { name: 'COD_USUARIO' } })
            this.belongsToMany(models.Tcc, { through: 'TB_ALUNO_TCC' })
            this.belongsTo(models.Curso, { foreignKey: { name: 'COD_CURSO' } })
            this.hasMany(models.Tcc, { foreignKey: { name: 'COD_PROFESSOR_ORIENTADOR', allowNull: false } })
        }
    };
    Usuario.init({
        id: {
            type: Sequelize.INTEGER,
            field: "COD_USUARIO",
            primaryKey: true,
            autoIncrement: true
        },
        codPerfil: {
            type: Sequelize.INTEGER,
            field: "COD_PERFIL",
        },
        nome: {
            type: Sequelize.STRING,
            field: "NOM_USUARIO"
        },
        email: {
            type: Sequelize.STRING(50),
            field: "EMAIL"
        },
        matricula: {
            type: Sequelize.STRING(15),
            field: "MATRICULA"
        },
        codCurso: {
            type: Sequelize.STRING(50),
            field: "COD_CURSO"
        },
        telefone: {
            type: Sequelize.STRING(15),
            field: "TELEFONE"
        },
        desEndereco: {
            type: Sequelize.STRING(100),
            field: "DES_ENDERECO"
        },
        senha: {
            type: Sequelize.STRING(11),
            field: "SENHA"
        },
        dataNasc: {
            type: Sequelize.DATE,
            field: "DATA_NASC"
        },
        sexo: {
            type: Sequelize.INTEGER,
            field: "SEXO"
        }
    }, {
        sequelize,
        modelName: 'Usuario',
        freezeTableName: true

    });
    return Usuario;
};