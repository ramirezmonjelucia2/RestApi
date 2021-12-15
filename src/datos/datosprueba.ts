import { Empleado } from "../clases/empleados/empleado";
import { EMP_FIJO } from "../clases/empleados/empleadofijo";
import { EMP_TEMPORAL } from "../clases/empleados/empleadotemporal";
import { Casa } from "../clases/viviendas/casa";
import { Chalet } from "../clases/viviendas/chalet";
import { Vivienda } from "../clases/viviendas/vivienda";
import { modeloEmpleado, tEmpFijo, tEmpTemporal } from "../schemas/empleados";
import { modeloVivienda, tCasa, tChalet } from "../schemas/viviendas";
import { db } from "../utilidades/database";

export const salvarviv = async () => {

    let viviendas: Array<Vivienda> = new Array<Vivienda>();
    viviendas[0] = new Chalet(1, 20, 20, { municipio: "utrera", ciudad: "sevilla", codpost: 4123 }, { habitaciones: 3, baños: 2, ascensor: false, equipamiento: ["calefaccion", "aire acondicionado", "deposito de agua"] }, null, { vendido: false, fecha: null }, true, 8, 8);
    viviendas[1] = new Casa(3, 20, 20, { municipio: "marbella", ciudad: "malaga", codpost: 4123 }, { habitaciones: 3, baños: 2, ascensor: false, equipamiento: ["calefaccion", "aire acondicionado", "deposito de agua"] }, null, { vendido: false, fecha: null }, true);
    viviendas[2] = new Casa(4, 20, 20, { municipio: "linares", ciudad: "jaen", codpost: 4123 }, { habitaciones: 3, baños: 2, ascensor: false, equipamiento: ["calefaccion", "aire acondicionado", "deposito de agua"] }, null, { vendido: false, fecha: null }, false);
    viviendas[3] = new Chalet(5, 20, 20, { municipio: "ayamonte", ciudad: "huelva", codpost: 4123 }, { habitaciones: 3, baños: 2, ascensor: false, equipamiento: ["calefaccion", "aire acondicionado", "deposito de agua"] }, null, { vendido: false, fecha: null }, true, 8, 8);
    viviendas[4] = new Chalet(6, 20, 20, { municipio: "chipiona", ciudad: "cadiz", codpost: 4123 }, { habitaciones: 3, baños: 2, ascensor: false, equipamiento: ["calefaccion", "aire acondicionado", "deposito de agua"] }, null, { vendido: false, fecha: null }, false, 8, 8);


    let oSchema: any

    let dShemaCasa: tCasa = {
        "_tipoObjeto": null,
        "_idVivienda": null,
        "_largo": null,
        "_ancho": null,
        "_ubicacion": {
            "municipio": null,
            "ciudad": null,
            "codpost": null,
        },
        "_caracteristicas": {
            "habitaciones": null,
            "baños": null,
            "ascensor": null,
            "equipamiento": null
        },
        "_preciom2": null,
        "_estado": {
            "vendido": false,
            "fecha": null,
            "empleado": null,

        },
        "_cochera": null
    }
    let dShemaChalet: tChalet = {
        "_tipoObjeto": null,
        "_idVivienda": null,
        "_largo": null,
        "_ancho": null,
        "_ubicacion": {
            "municipio": null,
            "ciudad": null,
            "codpost": null,
        },
        "_caracteristicas": {
            "habitaciones": null,
            "baños": null,
            "ascensor": null,
            "equipamiento": null
        },
        "_preciom2": null,
        "_estado": {
            "vendido": false,
            "fecha": null,
            "empleado": null,

        },
        "_piscina": null,
        "_largojardin": null,
        "_anchojardin": null
    }

    await db.conectarBD()
    await modeloVivienda.deleteMany({})
    for (let v of viviendas) {
        dShemaChalet._idVivienda = dShemaCasa._idVivienda = v.idVivienda
        dShemaChalet._largo = dShemaCasa._largo = v.largo
        dShemaChalet._ancho = dShemaCasa._ancho = v.ancho
        dShemaChalet._ubicacion.municipio = dShemaCasa._ubicacion.municipio = v.ubicacion.municipio
        dShemaChalet._ubicacion.ciudad = dShemaCasa._ubicacion.ciudad = v.ubicacion.ciudad
        dShemaChalet._ubicacion.codpost = dShemaCasa._ubicacion.codpost = v.ubicacion.codpost
        dShemaChalet._caracteristicas.habitaciones = dShemaCasa._caracteristicas.habitaciones = v.caracteristicas.habitaciones
        dShemaChalet._caracteristicas.baños = dShemaCasa._caracteristicas.baños = v.caracteristicas.baños
        dShemaChalet._caracteristicas.ascensor = dShemaCasa._caracteristicas.ascensor = v.caracteristicas.ascensor
        dShemaChalet._caracteristicas.equipamiento = dShemaCasa._caracteristicas.equipamiento = v.caracteristicas.equipamiento
        dShemaChalet._preciom2 = dShemaCasa._preciom2 = v.preciom2()
        dShemaChalet._estado.vendido = dShemaCasa._estado.vendido = v.estado.vendido
        dShemaChalet._estado.fecha = dShemaCasa._estado.fecha = v.estado.fecha


        if (v instanceof Casa) {
            dShemaCasa._tipoObjeto = "Casa"
            dShemaCasa._cochera = v.cochera
            oSchema = new modeloVivienda(dShemaCasa)
        } else if (v instanceof Chalet) {
            dShemaChalet._tipoObjeto = "Chalet"
            dShemaChalet._piscina = v.piscina
            dShemaChalet._largojardin = v.largojardin
            dShemaChalet._anchojardin = v.anchojardin
            oSchema = new modeloVivienda(dShemaChalet)
        }
        await oSchema.save()
    }
    await db.desconectarBD()
}





export const salvaremp = async () => {

    let empleados: Array<Empleado> = new Array<Empleado>();
    empleados[0] = new EMP_FIJO(1, "pepe", 900, [], 250, 7)
    empleados[1] = new EMP_TEMPORAL(2, "ana", 1000, [], 50)
    empleados[2] = new EMP_TEMPORAL(3, "jesus", 1500, [], 30)
    let oSchema: any

    let dSchemaFijo: tEmpFijo = {
        _tipoObjeto: null,
        _idEmpleado: null,
        _nombre: null,
        _sueldobase: null,
        _ventas: null,
        _complemento: null,
        _horasxdia: null
    }
    let dSchemaTemporal: tEmpTemporal = {
        _tipoObjeto: null,
        _idEmpleado: null,
        _nombre: null,
        _sueldobase: null,
        _ventas: null,
        _comisionVenta: null

    }

    await db.conectarBD()
    await modeloEmpleado.deleteMany({})
    for (let e of empleados) {
        dSchemaFijo._idEmpleado = dSchemaTemporal._idEmpleado = e.id
        dSchemaFijo._nombre = dSchemaTemporal._nombre = e.nombre
        dSchemaFijo._sueldobase = dSchemaTemporal._sueldobase = e.sueldo()
        dSchemaFijo._ventas = dSchemaTemporal._ventas = e.ventas

        if (e instanceof EMP_FIJO) {
            dSchemaFijo._tipoObjeto = "Fijo"
            dSchemaFijo._complemento = e.complemento
            dSchemaFijo._horasxdia= e.horas
            oSchema = new modeloEmpleado(dSchemaFijo)
        } else if (e instanceof EMP_TEMPORAL) {
            dSchemaTemporal._tipoObjeto = "Temporal"
            dSchemaTemporal._comisionVenta = e.comision
            oSchema = new modeloEmpleado(dSchemaTemporal)
        }
        await oSchema.save()
    }
    await db.desconectarBD()
}