var express = require('express');
const cursoController = require('../controller/curso-controller')
var router = express.Router();

router.post('/',cursoController.insertCurso);
router.get('/',cursoController.getCursos);
router.get('/:nomecurso',cursoController.getCursosByName);
router.get('/id/:codcurso',cursoController.getCursosByid);
router.put('/:id',cursoController.updateCurso)
router.delete('/:id', cursoController.deleteCurso);
module.exports = router;
