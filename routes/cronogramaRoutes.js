var express = require('express');
const cronogramaController = require('../controller/cronograma-controller')
var router = express.Router();

router.post('/', cronogramaController.createCronograma); 

router.get('/:id', cronogramaController.getCronogramaById); //Listar cronogramas por ID

router.get('/semestre/:semestre', cronogramaController.getCronogramaBySemestre);

module.exports = router