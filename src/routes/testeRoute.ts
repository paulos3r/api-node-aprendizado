import { Router, Request, Response, application } from 'express'
import * as ApiController from '../controllers/apiController'

const router = Router();

//capiturar

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/nome/:name', ApiController.name);

router.get('/frase', ApiController.listFrase);
router.get('/frase/aleatorio', ApiController.aleatorioFrase)
router.get('/frase/:id', ApiController.getFrase)

//persistir
router.post('/frase', ApiController.createFrase );

//atualizar
router.put('/frase/:id', ApiController.updateFrase);

//excluir

router.delete('/frase/:id', ApiController.deleteFrase);

export default router;