import { Vivienda } from "../viviendas/vivienda"

export class Empleado {
    private _id: number
    private _nombre: string
    private _sueldobase: number
    private _ventas: Array<Vivienda>
    constructor(
        id: number,
        nombre: string,
        sueldobase: number,
        ventas: Array<Vivienda>
    ) {
        this._id = id
        this._nombre = nombre
        this._sueldobase = sueldobase
        this._ventas = ventas
    }

    get id() {
        return this._id
    }
    get nombre() {
        return this._nombre
    }
    get sueldobase() {
        return this._sueldobase
    }

    sueldo() {
        let sueldo = this._sueldobase
        return sueldo
    }
    get ventas() {
        return this._ventas
    }


}
