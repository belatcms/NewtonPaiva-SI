const db = require('../models/index').Perfil;
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');
const Usuario = require('../models/usuario')

exports.getListaPerfil = async(req, res) => {
    await db.findAll().then(r => {
        res.send(r)
        }).catch(c => { console.log(c + '') })

}

