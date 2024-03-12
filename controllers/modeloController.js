import ModeloModel from "../models/modeloModel.js"

export default class ModeloController {

    async listar(req, res) {
        try {
            let { marcaId } = req.params;         
            if (marcaId != "") {
                const modeloModel = new ModeloModel();
                const result = await modeloModel.listar(marcaId);
                const listaModelos = result.modelos;
    
                if (listaModelos.length > 0) {
                    res.status(200).json(listaModelos);
                } else {
                    res.status(404).json({ msg: "Não foi encontrado nenhum modelo com essa marca!" });
                }
            } else {
                res.status(400).json({ msg: "Houve um erro ao buscar modelos dessa marca." });
            }
           
        } catch (ex) {
            res.status(500).json(
                {msg: "Erro inesperado! Entre em contato com o nosso suporte técnico.",
                detalhes: ex.message})
        }
    }
}



