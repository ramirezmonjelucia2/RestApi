"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    constructor(id, nombre, sueldobase, ventas) {
        this._id = id;
        this._nombre = nombre;
        this._sueldobase = sueldobase;
        this._ventas = ventas;
    }
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get sueldobase() {
        return this._sueldobase;
    }
    sueldo() {
        let sueldo = this._sueldobase;
        return sueldo;
    }
    get ventas() {
        return this._ventas;
    }
}
exports.Empleado = Empleado;
