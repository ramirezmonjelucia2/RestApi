import { Vivienda } from "../viviendas/vivienda"
import { Empleado } from "./empleado"
export class EMP_TEMPORAL extends Empleado {
    private _comisionVenta: number

    constructor(
        id: number,
        nombre: string,
        sueldobase: number,
        ventas: Array<Vivienda>,
        comisionVenta: number) {
        super(id, nombre, sueldobase, ventas)
        this._comisionVenta = comisionVenta
    }
    get comision() {
        return this._comisionVenta
    }
    sueldo() {
        let sueldo = super.sueldo()
        let comision: number
        if (this.ventas.length > 2) {
            comision = 400
            sueldo += comision
        }
        return sueldo
    }
}

