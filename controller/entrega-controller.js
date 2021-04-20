const db = require('../models/index').Entrega;
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');

const Usuario = require('../models/usuario')

exports.getEntregasByAluno = async(req, res) => {
    const { id } = req.params;
    await db.findAll({ where: { codUsuario: id } }).then(resultado => {
        res.send(resultado)
    }).
    catch(err => {
        res.send({ mensagem: 'Algo deu errado na busca de registros de Entrega.' + err, error: true })
    })
}
