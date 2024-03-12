import express from 'express'
import ModeloController from '../controllers/modeloController.js'
import Autenticacao from '../middlewares/authMiddleware.js'

let ctrl = new ModeloController()
const router = express.Router();
let auth = new Autenticacao();

router.get('/marcas/:marcaId', auth.validar, (req, res) => {
    // #swagger.tags = ['Modelos']
    // #swagger.summary = 'Consulta de modelos de uma determinada marca'
    // #swagger.parameters['marcaId'] = { description: 'Código da marca' }
    /* #swagger.security = [{
            "apiKeyAuth": ['PFSII']
    }] */
    ctrl.listar(req, res);
});

export default router;