"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casa = void 0;
const vivienda_1 = require("./vivienda");
class Casa extends vivienda_1.Vivienda {
    constructor(idVivienda, largo, ancho, ubicacion, caracteristicas, precioFinal, estado, cochera) {
        super(idVivienda, largo, ancho, ubicacion, caracteristicas, precioFinal, estado);
        this._cochera = cochera;
    }
    preciom2() {
        let preciom2 = super.preciom2();
        if (this._cochera == true) {
            preciom2 += 1.000;
        }
        return Math.round(preciom2);
    }
    get cochera() {
        return this._cochera;
    }
    todo() {
        return super.todo();
    }
}
exports.Casa = Casa;
