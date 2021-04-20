'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CRONOGRAMA', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codCursoFaseTcc: {
        type: Sequelize.INTEGER
      },
      desSemestre: {
        type: Sequelize.STRING
      },
      dtaInicio: {
        type: Sequelize.DATE
      },
      dtaFim: {
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
    await queryInterface.dropTable('cronogramaSemestrals');
  }
};