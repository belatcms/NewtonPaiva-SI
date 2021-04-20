'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => { 
    await queryInterface.bulkInsert('Perfil', [{
      DES_PERFIL: 'Useless aluno',
    }], {});
    const perfil = await queryInterface.sequelize.query(
      'SELECT COD_PERFIL from perfil;'
    );
    const perfilRow = perfil[0];
     for (let i = 0; i < 5; i++) {
      await queryInterface.bulkInsert('Usuario', [{
        email: 'Pessoa1'+i+'@gmail.com',
        matricula:'RA INVALIDO xd xd',
        telefone:'9 9999 9999',
        DES_ENDERECO:'RUA DOS BOBO numero 0',
        senha:'123456',
        DATA_NASC:new Date(),
        sexo:1,
        COD_PERFIL:perfilRow.COD_PERFIL,
        NOM_USUARIO:'teste'+i
      }], {});
     }
     await queryInterface.bulkInsert('curso', [{
      NOM_CURSO: 'SI',
    }], {});
    await queryInterface.bulkInsert('curso', [{
      NOM_CURSO: 'Engenharia',
    }], {});
    await queryInterface.bulkInsert('curso', [{
      NOM_CURSO: 'VASP',
    }], {});
    await queryInterface.bulkInsert('fase', [{
      DES_FASE_TCC: 'Primeira entrega',
      COD_CURSO:1
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
