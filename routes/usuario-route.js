var express = require('express');
const userController = require('../controller/usuario-controller')
var router = express.Router();

router.get('/',userController.getUsuarios);
// router.get('/:id',userController.getUsuarioTestPorPk);
// router.put('/:id',userController.updateUsuarioTeste);
// router.delete('/:id',userController.deleteUsuarioTestePorId);
// router.post('/',userController.insertUsuarioTeste);
router.post('/',userController.postUsuario);

router.delete('/:id', userController.deleteUsuario)
router.put('/:id',userController.updateUsuario)
router.get('/:id',userController.getUsuarioById)

module.exports = router;
