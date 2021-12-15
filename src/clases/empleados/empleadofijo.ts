import { Vivienda } from "../viviendas/vivienda"
import { Empleado } from "./empleado"

export class EMP_FIJO extends Empleado {
    private _complemento: number = 250
    private _horasxdia: number
    constructor(
        id: number,
        nombre: string,
        sueldobase: number,
        ventas: Array<Vivienda>,
        complemento: number,
        horasxdia: number
    ) {
        super(id, nombre, sueldobase, ventas)
        this._complemento = complemento
        this._horasxdia = horasxdia
    }
    get complemento() {
        return this._complemento
    }
    get horas() {
        return this._horasxdia
    }
    sueldo() {
        let horasmensuales: number = this._horasxdia * 20
        if (horasmensuales > 160) {
            console.log("Has hecho más de 8h diarias, este més tiene un complemento extra: ")
            let sueldo = super.sueldo() + this.complemento
            return sueldo

        } else {
            let sueldo = super.sueldo()
            return sueldo
        }

    }

}