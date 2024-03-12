import express from 'express'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const outputJson = require("./swagger-output.json");
import swaggerUi from 'swagger-ui-express';
import marcaRoute from './routes/marcaRoute.js'
import modeloRoute from './routes/modeloRoute.js'
import anosRoute from './routes/anosRoute.js'
import carroRoute from './routes/carroRoute.js'

const app = express();

app.use(express.json());

//página de documentação
app.use('/documentacao', swaggerUi.serve, swaggerUi.setup(outputJson));

app.use('/marcas', marcaRoute);
app.use('/modelos', modeloRoute);
app.use('/anos', anosRoute);
app.use('/carros', carroRoute);

app.listen(5000, function() {
    console.log("backend em execução");
})