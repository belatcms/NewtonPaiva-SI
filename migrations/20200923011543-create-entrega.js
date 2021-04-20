'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ENTREGA', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codEntrega: {
        type: Sequelize.INTEGER
      },
      codTcc: {
        type: Sequelize.INTEGER
      },
      codFaseTcc: {
        type: Sequelize.INTEGER
      },
      docEntrega: {
        type: Sequelize.STRING
      },
      desComentario: {
        type: Sequelize.STRING
      },
      numNota: {
        type: Sequelize.DOUBLE
      },
      dataEntrega: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('entregas');
  }
};