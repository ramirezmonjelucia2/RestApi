"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMP_TEMPORAL = void 0;
const empleado_1 = require("./empleado");
class EMP_TEMPORAL extends empleado_1.Empleado {
    constructor(id, nombre, sueldobase, ventas, comisionVenta) {
        super(id, nombre, sueldobase, ventas);
        this._comisionVenta = comisionVenta;
    }
    get comision() {
        return this._comisionVenta;
    }
    sueldo() {
        let sueldo = super.sueldo();
        let comision;
        if (this.ventas.length > 2) {
            comision = 400;
            sueldo += comision;
        }
        return sueldo;
    }
}
exports.EMP_TEMPORAL = EMP_TEMPORAL;
