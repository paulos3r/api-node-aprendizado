import { Router, Request, Response } from 'express'
import * as ApiController from '../controllers/apiController'

const router = Router();

router.get('/ping', ApiController.ping);

router.get('/random', ApiController.random);
router.get('/nome/:name', ApiController.name)
export default router;