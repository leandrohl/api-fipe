import { baseUrl } from "../constants/api.js";

export default class CarroModel {
    #Valor;
    #Marca;
    #Modelo;
    #AnoModelo;
    #Combustivel;
    #CodigoFipe;
    #MesReferencia;
    #TipoVeiculo;
    #SiglaCombustivel;

    get Valor(){
        return this.#Valor;
    }
    set Valor(nome){
        this.#Valor = Valor;
    }

    get Marca(){
        return this.#Marca;
    }
    set Marca(Marca){
        this.#Marca = Marca;
    }

    get Modelo(){
        return this.#Modelo;
    }
    set Modelo(Modelo){
        this.#Modelo = Modelo;
    }

    get AnoModelo(){
        return this.#AnoModelo;
    }
    set AnoModelo(AnoModelo){
        this.#AnoModelo = AnoModelo;
    }

    get Combustivel(){
        return this.#Combustivel;
    }
    set Combustivel(Combustivel){
        this.#Combustivel = Combustivel;
    }

    get CodigoFipe(){
        return this.#CodigoFipe;
    }
    set CodigoFipe(CodigoFipe){
        this.#CodigoFipe = CodigoFipe;
    }
    

    get MesReferencia(){
        return this.#MesReferencia;
    }
    set MesReferencia(MesReferencia){
        this.#MesReferencia = MesReferencia;
    }

    get TipoVeiculo(){
        return this.#TipoVeiculo;
    }
    set TipoVeiculo(TipoVeiculo){
        this.#TipoVeiculo = TipoVeiculo;
    }

    get SiglaCombustivel(){
        return this.#SiglaCombustivel;
    }
    set SiglaCombustivel(SiglaCombustivel){
        this.#SiglaCombustivel = SiglaCombustivel;
    }

    constructor(Valor, Marca, Modelo, AnoModelo, Combustivel, CodigoFipe, MesReferencia, TipoVeiculo, SiglaCombustivel) {
        this.#Valor = Valor
        this.#Marca = Marca
        this.#Modelo = Modelo
        this.#AnoModelo = AnoModelo
        this.#Combustivel = Combustivel
        this.#CodigoFipe = CodigoFipe
        this.#MesReferencia = MesReferencia
        this.#TipoVeiculo = TipoVeiculo
        this.#SiglaCombustivel = SiglaCombustivel
    }

    async listar(marcaId, modeloId, AnoeMesId) {
        const payload = await fetch(`${baseUrl}/carros/marcas/${marcaId}/modelos/${modeloId}/anos/${AnoeMesId}`, { method: 'GET'})
        return await payload.json();
    }

    toJSON() {
        return {
            Valor: this.Valor,
            Marca: this.Marca,
            Modelo: this.Modelo,
            AnoModelo: this.AnoModelo,
            Combustivel: this.Combustivel,
            CodigoFipe: this.CodigoFipe,
            MesReferencia: this.MesReferencia,
            TipoVeiculo: this.TipoVeiculo,
            SiglaCombustivel: this.SiglaCombustivel
        }
    }
}