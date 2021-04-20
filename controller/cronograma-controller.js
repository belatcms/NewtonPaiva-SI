const db = require('../models/index').CronogramaSemestral;
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');
const Usuario = require('../models/usuario')

exports.createCronograma = async(req, res) => {
    await db.create(req.body).then(r => {
        res.sendStatus(200)
    }).catch(c => { console.log(c + '') })

}

exports.getCronogramaById = async(req, res) => {
    const { id } = req.params;
    await db.findAll({ where: { codCursoFaseTcc: id } }).then(resultado => {
        res.send(resultado)
    }).
    catch(err => {
        res.send({ mensagem: 'Não foi encontrado nenhum registro.' + err, error: true })
    })
}

exports.getCronogramaBySemestre = async(req, res) => {
    const { semestre } = req.params;
    await db.findAll({ where: { desSemestre: semestre } }).then(resultado => {
        res.send(resultado)
    }).
    catch(err => {
        res.send({ mensagem: 'Não foi encontrado nenhum registro.' + err, error: true })
    })
}