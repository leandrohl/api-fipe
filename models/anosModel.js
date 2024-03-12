import { baseUrl } from "../constants/api.js";

export default class AnosModel {
    #codigo
    #nome

    get codigo(){
        return this.#codigo;
    }
    set codigo(codigo){
        this.#codigo = codigo;
    }

    get nome(){
        return this.#nome;
    }
    set nome(nome){
        this.#nome = nome;
    }

    constructor(codigo, nome) {
        this.#codigo = codigo,
        this.#nome = nome
    }

    async listar(marcaId, modeloId) {
        const payload = await fetch(`${baseUrl}/carros/marcas/${marcaId}/modelos/${modeloId}/anos`, { method: 'GET'})
        return await payload.json();
    }

    toJSON() {
        return {
            codigo: this.codigo,
            nome: this.nome
        }
    }
}