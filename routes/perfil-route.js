var express = require('express');
const perfilController = require('../controller/perfil-controller')
var router = express.Router();

router.get('/',perfilController.getListaPerfil);


module.exports = router;
