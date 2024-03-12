import express from 'express'
import AnosController from '../controllers/anosController.js'
import Autenticacao from '../middlewares/authMiddleware.js'

let ctrl = new AnosController()
const router = express.Router();
let auth = new Autenticacao();

router.get('/marcas/:marcaId/modelos/:modeloId', auth.validar, (req, res) => {
    // #swagger.tags = ['Anos']
    // #swagger.summary = 'Consulta de anos de um determinado modelo de uma determinada marca'
    // #swagger.parameters['marcaId'] = { description: 'Código da marca' }
    // #swagger.parameters['modeloId'] = { description: 'Código do modelo' }
    /* #swagger.security = [{
            "apiKeyAuth": ['PFSII']
    }] */
    ctrl.listar(req, res);
});

export default router;