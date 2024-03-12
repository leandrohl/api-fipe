import express from 'express'
import MarcaController from '../controllers/marcaController.js'
import Autenticacao from '../middlewares/authMiddleware.js'

let ctrl = new MarcaController()
const router = express.Router();
let auth = new Autenticacao();

router.get('/', auth.validar, (req, res) => {
    // #swagger.tags = ['Marcas']
    // #swagger.summary = 'Consulta de marcas de carros'
    /* #swagger.security = [{
            "apiKeyAuth": ['PFSII']
    }] */
    ctrl.listar(req, res);
});

export default router;