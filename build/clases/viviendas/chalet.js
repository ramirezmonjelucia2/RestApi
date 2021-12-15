"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chalet = void 0;
const vivienda_1 = require("./vivienda");
class Chalet extends vivienda_1.Vivienda {
    constructor(idVivienda, largo, ancho, ubicacion, caracteristicas, precioFinal, estado, piscina, largojardin, anchojardin) {
        super(idVivienda, largo, ancho, ubicacion, caracteristicas, precioFinal, estado);
        this._piscina = piscina;
        this._largojardin = largojardin;
        this._anchojardin = anchojardin;
    }
    get piscina() {
        return this._piscina;
    }
    get largojardin() {
        return this._largojardin;
    }
    get anchojardin() {
        return this._anchojardin;
    }
    preciom2() {
        let preciom2 = super.preciom2();
        let preciojardin = this.m2jardin();
        preciom2 = preciom2 + preciojardin;
        if (this._piscina == true) {
            preciom2 += 200;
        }
        return Math.round(preciom2);
    }
    m2jardin() {
        let preciom2jardin;
        if (this.ubicacion.ciudad == "sevilla") {
            preciom2jardin = this.sjardin() * 1386;
            return preciom2jardin;
        }
        else if (this.ubicacion.ciudad == "almeria") {
            preciom2jardin = this.sjardin() * 1088;
            return preciom2jardin;
        }
        else if (this.ubicacion.ciudad == "jaen") {
            preciom2jardin = this.sjardin() * 823;
            return preciom2jardin;
        }
        else if (this.ubicacion.ciudad == "malaga") {
            preciom2jardin = this.sjardin() * 2442;
            return preciom2jardin;
        }
        else if (this.ubicacion.ciudad == "granada") {
            preciom2jardin = this.sjardin() * 1375;
            return preciom2jardin;
        }
        else if (this.ubicacion.ciudad == "cadiz") {
            preciom2jardin = this.sjardin() * 1555;
            return preciom2jardin;
        }
        else if (this.ubicacion.ciudad == "cordoba") {
            preciom2jardin = this.sjardin() * 1220;
            return preciom2jardin;
        }
        else if (this.ubicacion.ciudad == "huelva") {
            preciom2jardin = this.sjardin() * 1253;
            return preciom2jardin;
        }
    }
    sjardin() {
        let sjardin;
        sjardin = this._anchojardin * this._largojardin;
        return sjardin;
    }
    todo() {
        let resultado;
        resultado = `${super.todo()}, ¿Tiene piscina?: ${this._piscina}, Superficie del jardin(m2): ${this.sjardin()}, `;
        return resultado;
    }
}
exports.Chalet = Chalet;
