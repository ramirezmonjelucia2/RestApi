"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMP_FIJO = void 0;
const empleado_1 = require("./empleado");
class EMP_FIJO extends empleado_1.Empleado {
    constructor(id, nombre, sueldobase, ventas, complemento, horasxdia) {
        super(id, nombre, sueldobase, ventas);
        this._complemento = 250;
        this._complemento = complemento;
        this._horasxdia = horasxdia;
    }
    get complemento() {
        return this._complemento;
    }
    get horas() {
        return this._horasxdia;
    }
    sueldo() {
        let horasmensuales = this._horasxdia * 20;
        if (horasmensuales > 160) {
            console.log("Has hecho más de 8h diarias, este més tiene un complemento extra: ");
            let sueldo = super.sueldo() + this.complemento;
            return sueldo;
        }
        else {
            let sueldo = super.sueldo();
            return sueldo;
        }
    }
}
exports.EMP_FIJO = EMP_FIJO;
