const db = require('../models/index').Curso;
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');


exports.insertCurso = async(req, res) => {
    await db.create(req.body).then(r => {
        res.send(r)
        }).catch(c => { console.log(c + '') })
}
exports.getCursos = async(req, res) => {
    await db.findAll().then(r => {
        res.send(r)
        }).catch(c => { console.log(c + '') })
}
exports.getCursosByName = async(req, res) => {
    await db.findAll(
        {where:{nomcurso:req.params.nomecurso}}
    ).then(r => {
        res.send(r)
        }).catch(c => { console.log(c + '') })
}
exports.getCursosByid = async(req, res) => {
    await db.findByPk(req.params.codcurso).then(r => {
        res.send(r)
        }).catch(c => { console.log(c + '') })
}
exports.deleteCurso = async(req, res) =>{
    console.log(" ------ id: ", req.params.id)
    await db.destroy({where:{id:req.params.id}}).then(result =>{
        res.sendStatus(200)
    }).catch(erro => {
        console.log(erro)
        return new Error("Falha ao Excluir Curso")
    })
}
exports.updateCurso= async(req,res)=>{
   await db.update(
        {nomcurso: req.body.nomcurso},
        {where:{id:req.params.id}}
      ).then(result =>{
        res.sendStatus(200)
    }).catch(erro => {
        console.log(erro)
        return new Error("Falha ao atualizar Curso")
    })    
}