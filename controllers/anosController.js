import AnosModel from "../models/anosModel.js"

export default class AnosController {
    
    async listar(req, res) {
        try {
            
            let { marcaId, modeloId } = req.params;

            if (modeloId != 0) {
                const anosModel = new AnosModel();
                const result = await anosModel.listar(marcaId, modeloId);
                const listaAnos = result;
                
                
                if (listaAnos.length > 0) {     
                    res.status(200).json(listaAnos);
                } else {
                    res.status(404).json({ msg: "Não foi encontrado nenhum ano!" });
                }
            } else {
                res.status(400).json({ msg: "Houve um erro ao buscar os anos" });
            }
           
        } catch (ex) {
            res.status(500).json(
                {msg: "Erro inesperado! Entre em contato com o nosso suporte técnico.",
                detalhes: ex.message})
        }
    }
}



