import { baseUrl } from "../constants/api.js";

export default class MarcaModel {

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

    async listar() {
        const payload = await fetch(`${baseUrl}/carros/marcas`, { method: 'GET'})    
        return await payload.json();
    }

    toJSON() {
        return {
            codigo: this.codigo,
            nome: this.nome
        }
    }
}