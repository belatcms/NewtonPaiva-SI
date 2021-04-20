'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TABELATESTEDOGABRIELNAOMEXER', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      nomEmail: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      matricula: {
        type: Sequelize.STRING
      },
      nomCurso: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      desEndereco: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      dataNasc: {
        type: Sequelize.DATE
      },
      sexo: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};