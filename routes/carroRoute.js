import express from 'express'
import CarroController from '../controllers/carroController.js'
import Autenticacao from '../middlewares/authMiddleware.js'

let ctrl = new CarroController()
const router = express.Router();
let auth = new Autenticacao();

router.get('/marcas/:marcaId/modelos/:modeloId/anos/:anoMesId', auth.validar, (req, res) => {
    // #swagger.tags = ['Info Carros']
    // #swagger.summary = 'Consulta de informações do ano de um determinado modelo de uma determinada marca'
    // #swagger.parameters['marcaId'] = { description: 'Código da marca' }
    // #swagger.parameters['modeloId'] = { description: 'Código do modelo' }
    // #swagger.parameters['anoMesId'] = { description: 'Ano-Mes do carro' }
    /* #swagger.security = [{
            "apiKeyAuth": ['PFSII']
    }] */
    ctrl.listarInfos(req, res);
});

export default router;