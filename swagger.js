import swaggerAutogen from "swagger-autogen";
import MarcaModel from "./models/marcaModel.js";
import ModeloModel from "./models/modeloModel.js";
import AnosModel from "./models/anosModel.js";
import CarroModel from "./models/carroModel.js";

const doc = {
    info: {
        title: "API RESTful - Consulta Tabela FIPE",
    },
    host: 'localhost:5000',
    securityDefinitions: {
        apiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'chaveapi', 
          description: 'Chave de autorização da nossa API'
        },
    },
    components: {
        schemas: {
            marcaModel: new MarcaModel(1, "Acura").toJSON(),
            modeloModel: new ModeloModel(926, "A-10 2.5/4.1").toJSON(),
            anosModel: new AnosModel("2016-1", "2016 Gasolina").toJSON(),
            carroModel: new CarroModel("R$ 58.862,00", "GM - Chevrolet", "CRUZE HB Sport LT 1.8 16V FlexP. 5p Aut", 2016, "Gasolina", "004399-0", "janeiro de 2020 ", 1, "G").toJSON(),
        },
        
    }
}

const outputJson = "./swagger-output.json";
const routes = ['./server.js']

swaggerAutogen({openapi: '3.0.0'})(outputJson, routes, doc)
.then( async () => {
    await import('./server.js');
})