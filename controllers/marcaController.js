import MarcaModel from "../models/marcaModel.js"

export default class MarcaController {
    async listar(req, res) {
        try {
            console.log("cheuguei aqui")
            const marcaModel = new MarcaModel();
            const listaMarcas = await marcaModel.listar();

            if (listaMarcas.length > 0) {
                res.status(200).json(listaMarcas);
            } else {
                res.status(404).json({ msg: "Não foi encontrado nenhuma marca!" });
            }
        } catch (ex) {
            res.status(500).json(
                {msg: "Erro inesperado! Entre em contato com o nosso suporte técnico.",
                detalhes: ex.message})
        }
    }
}



