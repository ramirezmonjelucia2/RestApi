import { Schema, model } from 'mongoose'
import { Vivienda } from '../clases/viviendas/vivienda'
const empleadoSchema = new Schema({
    "_tipoObjeto": String,
    "_idEmpleado": {
        type: Number,
        unique: true,
    },
    "_nombre": String,
    "_sueldobase": {
        type: Number,
        default: 950
    },
    "_ventas": Array,
    "_complemento": Number,
    "_comisionventa": Number,
    "_horasxdia": Number
})



export type tEmpTemporal = {
    "_tipoObjeto": string | null,
    "_idEmpleado": number | null,
    "_nombre": string | null,
    "_sueldobase": number | null,
    "_ventas": Array<Vivienda> | null,
    "_comisionVenta": number | null
}


export type tEmpFijo = {
    "_tipoObjeto": string | null,
    "_idEmpleado": number | null,
    "_nombre": string | null,
    "_sueldobase": number | null,
    "_ventas": Array<Vivienda> | null,
    "_complemento": number | null
    "_horasxdia": number | null
}

export type totEmpleados = {
    "_tipoObjeto": string,
    "_idEmpleado": number,
    "_nombre": string,
    "_sueldobase": number,
    "_ventas": Array<Vivienda>,
    "_complemento": number,
    "_comisionventa": number,
    "_horasxdia": number


}

export const modeloEmpleado = model('empleados', empleadoSchema)