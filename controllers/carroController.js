import CarroModel from "../models/carroModel.js"

export default class CarroController {

    async listarInfos(req, res) {
        try {
            let { marcaId, modeloId, anoMesId } = req.params;
    
            if (req.params) {
                const carroModel = new CarroModel();
                const result = await carroModel.listar(marcaId, modeloId, anoMesId);
                const listaInfoAnos = result;
                if (listaInfoAnos.length > 0) {     
                    res.status(200).json(listaInfoAnos);
                } else {
                    res.status(404).json({ msg: "Não foi encontrado nenhuma informação de nenhum ano!" });
                }
            } else {
                res.status(400).json({ msg: "Houve um erro ao buscar as informações do ano" });
            }
           
        } catch (ex) {
            res.status(500).json(
                {msg: "Erro inesperado! Entre em contato com o nosso suporte técnico.",
                detalhes: ex.message})
        }
    }
}



