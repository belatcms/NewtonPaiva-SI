const db = require('../models/index');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');
const Usuario = require('../models/usuario')


exports.getUsuarios = async(req, res) => {
    await db.Usuario.findAll({
        attributes: ['nome', 'email','id','codCurso','matricula'],
        include:{model: db.Curso}
    }).then(r => {
        res.send(r)
        }).catch(c => { console.log(c + '') })
}

exports.getUsuarioById = async(req, res) => {
    await db.Usuario.findByPk(req.params.id,{
        attributes: ['nome', 'email','id','codCurso','matricula','telefone','des_Endereco','dataNasc','sexo'],
        include:{model: db.Curso}
    }).then(r => {
        res.send(r)
        }).catch(c => { console.log(c + '') })
}

exports.postUsuario = async(req, res) => {
    await db.Usuario.create(req.body).then(r => {
        res.send(r)
        }).catch(c => { console.log(c + '') })
    }
exports.deleteUsuario = async(req, res) =>{
    console.log(" ------ id: ", req.params.id)
    await db.Usuario.destroy({where:{id:req.params.id}}).then(result =>{
        res.sendStatus(200)
    }).catch(erro => {
        console.log(erro)
        return new Error("Falha ao Excluir Usuário")
    })
}

exports.updateUsuario= async(req,res)=>{
    var object ={};

    await db.Usuario.update(
         {
             nome: req.body.nome,
             email:req.body.email,
             matricula:req.body.matricula,
             telefone:req.body.telefone,
             desEndereco:req.body.des_Endereco,
             dataNasc:req.body.dataNasc,
             sexo:req.body.sexo
            },
         {where:{id:req.params.id}}
       ).then(result =>{
         res.sendStatus(200)
     }).catch(erro => {
         console.log(erro)
         return new Error("Falha ao atualizar usuario")
     })    
 }