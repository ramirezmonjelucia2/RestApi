import { Empleado } from "../clases/empleados/empleado";
import { EMP_FIJO } from "../clases/empleados/empleadofijo";
import { EMP_TEMPORAL } from "../clases/empleados/empleadotemporal";
import { Casa } from "../clases/viviendas/casa";
import { Chalet } from "../clases/viviendas/chalet";
import { Vivienda } from "../clases/viviendas/vivienda";
import { salvaremp, salvarviv } from "../datos/datosprueba";
import { modeloEmpleado, tEmpFijo, tEmpTemporal, totEmpleados } from "../schemas/empleados";
import { modeloVivienda, tCasa, tChalet, totVivi } from "../schemas/viviendas";
import { db } from "./database";
import { leerTeclado } from "./leerTeclado";

//----------------------CREAR VIVIENDAS-------------------------------------------

export const nuevoChalet = async () => {
    const idVivienda = parseInt(await leerTeclado('\nIngrese el Id de la Vivienda '));
    const largo = parseInt(await leerTeclado('Por favor, indique el largo de la vivienda '));
    const ancho = parseInt(await leerTeclado('Por favor, indique el ancho de la vivienda '));
    const municipio = await leerTeclado('\nIngrese el municipio donde se encuentra ');
    const ciudad = await leerTeclado('\nIngrese la ciudad donde se encuentra ');
    const codpost = parseInt(await leerTeclado('\nIngrese el codigo postal '));
    const habitaciones = parseInt(await leerTeclado('\n¿Cuántas habitaciones tiene? '));
    const baños = parseInt(await leerTeclado('\n¿Cuántos baños tiene? '));
    const ascensor = Boolean(await leerTeclado('¿Tiene ascensor? (true or false) '));
    const equipamiento0 = await leerTeclado('\nEquipamiento (1/3)');
    const equipamiento1 = await leerTeclado('\nEquipamiento (2/3)');
    const equipamiento2 = await leerTeclado('\nEquipamiento (3/3)');
    const piscina = Boolean(await leerTeclado('Por favor, indique si tiene piscina (true or false) '));
    const largojardin = parseInt(await leerTeclado('Por favor, indique el largo del jardín'));
    const anchojardin = parseInt(await leerTeclado('Por favor, indique el ancho del jardín'));
    await db.conectarBD()
    let v = new Chalet(idVivienda,
        largo,
        ancho,
        { municipio: municipio, ciudad: ciudad, codpost: codpost },
        { habitaciones: habitaciones, baños: baños, ascensor: ascensor, equipamiento: [equipamiento0, equipamiento1, equipamiento2] },
        null,
        { vendido: false, fecha: null },
        piscina,
        largojardin,
        anchojardin)


    let oSchema: any
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

    dShemaChalet._tipoObjeto = "Chalet"
    dShemaChalet._idVivienda = v.idVivienda
    dShemaChalet._largo = v.largo
    dShemaChalet._ancho = v.ancho
    dShemaChalet._ubicacion.municipio = v.ubicacion.municipio
    dShemaChalet._ubicacion.ciudad = v.ubicacion.ciudad
    dShemaChalet._ubicacion.codpost = v.ubicacion.codpost
    dShemaChalet._caracteristicas.habitaciones = v.caracteristicas.habitaciones
    dShemaChalet._caracteristicas.baños = v.caracteristicas.baños
    dShemaChalet._caracteristicas.ascensor = v.caracteristicas.ascensor
    dShemaChalet._caracteristicas.equipamiento = v.caracteristicas.equipamiento
    dShemaChalet._preciom2 = v.preciom2()
    dShemaChalet._estado.vendido = v.estado.vendido
    dShemaChalet._estado.fecha = v.estado.fecha
    dShemaChalet._piscina = v.piscina
    dShemaChalet._largojardin = v.largojardin
    dShemaChalet._anchojardin = v.anchojardin


    oSchema = new modeloVivienda(dShemaChalet)
    await oSchema.save()
    await db.desconectarBD()
}

export const nuevaCasa = async () => {

    const idVivienda = parseInt(await leerTeclado('\nIngrese el Id de la Vivienda '));
    const largo = parseInt(await leerTeclado('Por favor, indique el largo de la vivienda '));
    const ancho = parseInt(await leerTeclado('Por favor, indique el ancho de la vivienda '));
    const municipio = await leerTeclado('\nIngrese el municipio donde se encuentra ');
    const ciudad = await leerTeclado('\nIngrese la ciudad donde se encuentra ');
    const codpost = parseInt(await leerTeclado('\nIngrese el codigo postal '));
    const habitaciones = parseInt(await leerTeclado('\n¿Cuántas habitaciones tiene? '));
    const baños = parseInt(await leerTeclado('\n¿Cuántos baños tiene? '));
    const ascensor = Boolean(await leerTeclado('¿Tiene ascensor? (true or false) '));
    const equipamiento0 = await leerTeclado('\nEquipamiento (1/3)');
    const equipamiento1 = await leerTeclado('\nEquipamiento (2/3)');
    const equipamiento2 = await leerTeclado('\nEquipamiento (3/3)');
    const cochera = Boolean(await leerTeclado('¿Tiene cochera? (true or false) '));

    await db.conectarBD()
    let v = new Casa(idVivienda,
        largo,
        ancho,
        { municipio: municipio, ciudad: ciudad, codpost: codpost },
        { habitaciones: habitaciones, baños: baños, ascensor: ascensor, equipamiento: [equipamiento0, equipamiento1, equipamiento2] },
        null,
        { vendido: false, fecha: null },
        cochera)



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
    dShemaCasa._tipoObjeto = "Casa"
    dShemaCasa._idVivienda = v.idVivienda
    dShemaCasa._largo = v.largo
    dShemaCasa._ancho = v.ancho
    dShemaCasa._ubicacion.municipio = v.ubicacion.municipio
    dShemaCasa._ubicacion.ciudad = v.ubicacion.ciudad
    dShemaCasa._ubicacion.codpost = v.ubicacion.codpost
    dShemaCasa._caracteristicas.habitaciones = v.caracteristicas.habitaciones
    dShemaCasa._caracteristicas.baños = v.caracteristicas.baños
    dShemaCasa._caracteristicas.ascensor = v.caracteristicas.ascensor
    dShemaCasa._caracteristicas.equipamiento = v.caracteristicas.equipamiento
    dShemaCasa._preciom2 = v.preciom2()
    dShemaCasa._estado.vendido = v.estado.vendido
    dShemaCasa._estado.fecha = v.estado.fecha
    dShemaCasa._cochera = v.cochera


    oSchema = new modeloVivienda(dShemaCasa)
    await oSchema.save()
    await db.desconectarBD()
}


//---------------------------------CREAR EMPLEADOS----------------------------------

export const nuevoEmpleadoFijo = async () => {
    const id = parseInt(await leerTeclado('ID '));
    const nombre = await leerTeclado('Nombre: ');
    const sueldo = parseInt(await leerTeclado('Sueldo base: '));
    const horasxdia = parseInt(await leerTeclado('Horas de trabajo '));
    let e = new EMP_FIJO(id, nombre, sueldo, [], horasxdia, 0)


    await db.conectarBD()
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
    dSchemaFijo._tipoObjeto = "Fijo"
    dSchemaFijo._idEmpleado = e.id
    dSchemaFijo._nombre = e.nombre
    dSchemaFijo._sueldobase = e.sueldo()
    dSchemaFijo._ventas = e.ventas
    dSchemaFijo._complemento = e.complemento
    dSchemaFijo._horasxdia = e.horas
    oSchema = new modeloEmpleado(dSchemaFijo)
    await oSchema.save()
    await db.desconectarBD()
}

export const nuevoEmpleadoTemporal = async () => {
    await db.conectarBD()
    const id = parseInt(await leerTeclado('ID '));
    const nombre = await leerTeclado('Nombre: ');
    const sueldo = parseInt(await leerTeclado('Sueldo base: '));
    let e = new EMP_TEMPORAL(id, nombre, sueldo, [], 0)

    await db.conectarBD()
    let oSchema: any
    let dSchemaTemporal: tEmpTemporal = {
        _tipoObjeto: null,
        _idEmpleado: null,
        _nombre: null,
        _sueldobase: null,
        _ventas: null,
        _comisionVenta: null

    }
    dSchemaTemporal._tipoObjeto = "Temporal"
    dSchemaTemporal._idEmpleado = e.id
    dSchemaTemporal._nombre = e.nombre
    dSchemaTemporal._sueldobase = e.sueldo()
    dSchemaTemporal._ventas = e.ventas
    dSchemaTemporal._comisionVenta = e.comision
    oSchema = new modeloEmpleado(dSchemaTemporal)
    oSchema = new modeloEmpleado(dSchemaTemporal)
    await oSchema.save()
    await db.desconectarBD()
}


//------------------------------SALARIO------------------------
export const salario = async () => {
    await db.conectarBD()
    let dEmpleado: totEmpleados
    let tmpEmp: Empleado
    let query: any = await modeloEmpleado.find({})

    for (dEmpleado of query) {
        if (dEmpleado._tipoObjeto == "Fijo") {

            tmpEmp = new EMP_FIJO(
                dEmpleado._idEmpleado,
                dEmpleado._nombre,
                dEmpleado._sueldobase,
                dEmpleado._ventas,
                dEmpleado._complemento,
                dEmpleado._horasxdia)
            console.log("Nombre: " + tmpEmp.nombre + " Sueldo: " + tmpEmp.sueldo())

        } else if (dEmpleado._tipoObjeto == "Temporal") {
            tmpEmp = new EMP_TEMPORAL(
                dEmpleado._idEmpleado,
                dEmpleado._nombre,
                dEmpleado._sueldobase,
                dEmpleado._ventas,
                dEmpleado._comisionventa)
            console.log("Nombre: " + tmpEmp.nombre + " Sueldo: " + tmpEmp.sueldo())
        }
    }

    await db.desconectarBD()
}

//----------REALIZAR VENTA---------------
export const realizarVenta = async () => {
    let idEmp = parseInt(await leerTeclado('Ingresa tu ID (empleado) '))
    let id = parseInt(await leerTeclado('ID de la Vivienda que se va a vender '))
    let dEmpleado: totEmpleados
    let tmpFIJO: EMP_FIJO = new EMP_FIJO(0, "", 0, [], 0, 0)
    let tmpTEMP: EMP_TEMPORAL = new EMP_TEMPORAL(0, "", 0, [], 0)

    await db.conectarBD()

    let query: any = await modeloEmpleado.findOne(
        {
            _idEmpleado: idEmp
        }
    )
    dEmpleado = query
    if (dEmpleado._tipoObjeto == "Fijo") {
        tmpFIJO = new EMP_FIJO(
            dEmpleado._idEmpleado,
            dEmpleado._nombre,
            dEmpleado._sueldobase,
            dEmpleado._ventas,
            dEmpleado._complemento,
            dEmpleado._horasxdia)
    } else if (dEmpleado._tipoObjeto == "Temporal") {
        tmpTEMP = new EMP_TEMPORAL(
            dEmpleado._idEmpleado,
            dEmpleado._nombre,
            dEmpleado._sueldobase,
            dEmpleado._ventas,
            dEmpleado._comisionventa)
    }


    await modeloVivienda.findOneAndUpdate(
        { _idVivienda: id },
        {
            "_estado.vendido": true,
            "_estado.fecha": new Date(),
            "_estado.empleado": idEmp
        },
        {
            runValidators: true
        }
    )
        .then(() => console.log('\nSe ha agregado una nueva venta a ' + dEmpleado._nombre))
        .catch((err: any) => console.log('\nError: ' + err))

    await db.desconectarBD()
}

//-------------------------------VIVIENDAS VENDIDAS------------------------------------
export const viviendasvendidas = async () => {

    await db.conectarBD()
    let dVivi: any
    let query = await modeloVivienda.find({ "_estado.vendido": true })
    for (dVivi of query) {
        if (dVivi._tipoObjeto == "Chalet") {
            let tmpChalet = new Chalet(
                dVivi._idVivienda,
                dVivi._largo
                , dVivi._ancho
                , {
                    municipio: dVivi._ubicacion.municipio
                    , ciudad: dVivi._ubicacion.ciudad,
                    codpost: dVivi._ubicacion.codpost
                },
                {
                    habitaciones: dVivi._caracteristicas.habitaciones,
                    baños: dVivi._caracteristicas.baños,
                    ascensor: dVivi._caracteristicas.ascensor,
                    equipamiento: [dVivi._caracteristicas.equipamiento]
                },
                dVivi._preciom2,
                {
                    vendido: dVivi._estado.vendido,
                    fecha: dVivi._estado.fecha
                },
                dVivi._piscina,
                dVivi._largojardin,
                dVivi._anchojardin)
            console.log(`${tmpChalet.todo()}`)

        }

        else {
            let tmpCasa = new Casa(
                dVivi._idVivienda,
                dVivi._largo,
                dVivi._ancho,
                {
                    municipio: dVivi._ubicacion.municipio,
                    ciudad: dVivi._ubicacion.ciudad,
                    codpost: dVivi._ubicacion.codpost
                },
                {
                    habitaciones: dVivi._caracteristicas.habitaciones,
                    baños: dVivi._caracteristicas.baños,
                    ascensor: dVivi._caracteristicas.ascensor,
                    equipamiento: [dVivi._caracteristicas.equipamiento]
                },
                dVivi._preciom2,
                {
                    vendido: dVivi._estado.vendido,
                    fecha: dVivi._estado.fecha
                },
                dVivi._cochera
            )
            console.log(`${tmpCasa.todo()}`)

        }
    }
    await db.desconectarBD()


}