var express = require('express');
const EntregaController = require('../controller/entrega-controller')
var router = express.Router();

router.get('/:id',EntregaController.getEntregasByAluno);

module.exports = router