"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viviendasvendidas = exports.realizarVenta = exports.salario = exports.nuevoEmpleadoTemporal = exports.nuevoEmpleadoFijo = exports.nuevaCasa = exports.nuevoChalet = void 0;
const empleadofijo_1 = require("../clases/empleados/empleadofijo");
const empleadotemporal_1 = require("../clases/empleados/empleadotemporal");
const casa_1 = require("../clases/viviendas/casa");
const chalet_1 = require("../clases/viviendas/chalet");
const empleados_1 = require("../schemas/empleados");
const viviendas_1 = require("../schemas/viviendas");
const database_1 = require("./database");
const leerTeclado_1 = require("./leerTeclado");
//----------------------CREAR VIVIENDAS-------------------------------------------
const nuevoChalet = () => __awaiter(void 0, void 0, void 0, function* () {
    const idVivienda = parseInt(yield (0, leerTeclado_1.leerTeclado)('\nIngrese el Id de la Vivienda '));
    const largo = parseInt(yield (0, leerTeclado_1.leerTeclado)('Por favor, indique el largo de la vivienda '));
    const ancho = parseInt(yield (0, leerTeclado_1.leerTeclado)('Por favor, indique el ancho de la vivienda '));
    const municipio = yield (0, leerTeclado_1.leerTeclado)('\nIngrese el municipio donde se encuentra ');
    const ciudad = yield (0, leerTeclado_1.leerTeclado)('\nIngrese la ciudad donde se encuentra ');
    const codpost = parseInt(yield (0, leerTeclado_1.leerTeclado)('\nIngrese el codigo postal '));
    const habitaciones = parseInt(yield (0, leerTeclado_1.leerTeclado)('\n¿Cuántas habitaciones tiene? '));
    const baños = parseInt(yield (0, leerTeclado_1.leerTeclado)('\n¿Cuántos baños tiene? '));
    const ascensor = Boolean(yield (0, leerTeclado_1.leerTeclado)('¿Tiene ascensor? (true or false) '));
    const equipamiento0 = yield (0, leerTeclado_1.leerTeclado)('\nEquipamiento (1/3)');
    const equipamiento1 = yield (0, leerTeclado_1.leerTeclado)('\nEquipamiento (2/3)');
    const equipamiento2 = yield (0, leerTeclado_1.leerTeclado)('\nEquipamiento (3/3)');
    const piscina = Boolean(yield (0, leerTeclado_1.leerTeclado)('Por favor, indique si tiene piscina (true or false) '));
    const largojardin = parseInt(yield (0, leerTeclado_1.leerTeclado)('Por favor, indique el largo del jardín'));
    const anchojardin = parseInt(yield (0, leerTeclado_1.leerTeclado)('Por favor, indique el ancho del jardín'));
    yield database_1.db.conectarBD();
    let v = new chalet_1.Chalet(idVivienda, largo, ancho, { municipio: municipio, ciudad: ciudad, codpost: codpost }, { habitaciones: habitaciones, baños: baños, ascensor: ascensor, equipamiento: [equipamiento0, equipamiento1, equipamiento2] }, null, { vendido: false, fecha: null }, piscina, largojardin, anchojardin);
    let oSchema;
    let dShemaChalet = {
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
    };
    dShemaChalet._tipoObjeto = "Chalet";
    dShemaChalet._idVivienda = v.idVivienda;
    dShemaChalet._largo = v.largo;
    dShemaChalet._ancho = v.ancho;
    dShemaChalet._ubicacion.municipio = v.ubicacion.municipio;
    dShemaChalet._ubicacion.ciudad = v.ubicacion.ciudad;
    dShemaChalet._ubicacion.codpost = v.ubicacion.codpost;
    dShemaChalet._caracteristicas.habitaciones = v.caracteristicas.habitaciones;
    dShemaChalet._caracteristicas.baños = v.caracteristicas.baños;
    dShemaChalet._caracteristicas.ascensor = v.caracteristicas.ascensor;
    dShemaChalet._caracteristicas.equipamiento = v.caracteristicas.equipamiento;
    dShemaChalet._preciom2 = v.preciom2();
    dShemaChalet._estado.vendido = v.estado.vendido;
    dShemaChalet._estado.fecha = v.estado.fecha;
    dShemaChalet._piscina = v.piscina;
    dShemaChalet._largojardin = v.largojardin;
    dShemaChalet._anchojardin = v.anchojardin;
    oSchema = new viviendas_1.modeloVivienda(dShemaChalet);
    yield oSchema.save();
    yield database_1.db.desconectarBD();
});
exports.nuevoChalet = nuevoChalet;
const nuevaCasa = () => __awaiter(void 0, void 0, void 0, function* () {
    const idVivienda = parseInt(yield (0, leerTeclado_1.leerTeclado)('\nIngrese el Id de la Vivienda '));
    const largo = parseInt(yield (0, leerTeclado_1.leerTeclado)('Por favor, indique el largo de la vivienda '));
    const ancho = parseInt(yield (0, leerTeclado_1.leerTeclado)('Por favor, indique el ancho de la vivienda '));
    const municipio = yield (0, leerTeclado_1.leerTeclado)('\nIngrese el municipio donde se encuentra ');
    const ciudad = yield (0, leerTeclado_1.leerTeclado)('\nIngrese la ciudad donde se encuentra ');
    const codpost = parseInt(yield (0, leerTeclado_1.leerTeclado)('\nIngrese el codigo postal '));
    const habitaciones = parseInt(yield (0, leerTeclado_1.leerTeclado)('\n¿Cuántas habitaciones tiene? '));
    const baños = parseInt(yield (0, leerTeclado_1.leerTeclado)('\n¿Cuántos baños tiene? '));
    const ascensor = Boolean(yield (0, leerTeclado_1.leerTeclado)('¿Tiene ascensor? (true or false) '));
    const equipamiento0 = yield (0, leerTeclado_1.leerTeclado)('\nEquipamiento (1/3)');
    const equipamiento1 = yield (0, leerTeclado_1.leerTeclado)('\nEquipamiento (2/3)');
    const equipamiento2 = yield (0, leerTeclado_1.leerTeclado)('\nEquipamiento (3/3)');
    const cochera = Boolean(yield (0, leerTeclado_1.leerTeclado)('¿Tiene cochera? (true or false) '));
    yield database_1.db.conectarBD();
    let v = new casa_1.Casa(idVivienda, largo, ancho, { municipio: municipio, ciudad: ciudad, codpost: codpost }, { habitaciones: habitaciones, baños: baños, ascensor: ascensor, equipamiento: [equipamiento0, equipamiento1, equipamiento2] }, null, { vendido: false, fecha: null }, cochera);
    let oSchema;
    let dShemaCasa = {
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
    };
    dShemaCasa._tipoObjeto = "Casa";
    dShemaCasa._idVivienda = v.idVivienda;
    dShemaCasa._largo = v.largo;
    dShemaCasa._ancho = v.ancho;
    dShemaCasa._ubicacion.municipio = v.ubicacion.municipio;
    dShemaCasa._ubicacion.ciudad = v.ubicacion.ciudad;
    dShemaCasa._ubicacion.codpost = v.ubicacion.codpost;
    dShemaCasa._caracteristicas.habitaciones = v.caracteristicas.habitaciones;
    dShemaCasa._caracteristicas.baños = v.caracteristicas.baños;
    dShemaCasa._caracteristicas.ascensor = v.caracteristicas.ascensor;
    dShemaCasa._caracteristicas.equipamiento = v.caracteristicas.equipamiento;
    dShemaCasa._preciom2 = v.preciom2();
    dShemaCasa._estado.vendido = v.estado.vendido;
    dShemaCasa._estado.fecha = v.estado.fecha;
    dShemaCasa._cochera = v.cochera;
    oSchema = new viviendas_1.modeloVivienda(dShemaCasa);
    yield oSchema.save();
    yield database_1.db.desconectarBD();
});
exports.nuevaCasa = nuevaCasa;
//---------------------------------CREAR EMPLEADOS----------------------------------
const nuevoEmpleadoFijo = () => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(yield (0, leerTeclado_1.leerTeclado)('ID '));
    const nombre = yield (0, leerTeclado_1.leerTeclado)('Nombre: ');
    const sueldo = parseInt(yield (0, leerTeclado_1.leerTeclado)('Sueldo base: '));
    const horasxdia = parseInt(yield (0, leerTeclado_1.leerTeclado)('Horas de trabajo '));
    let e = new empleadofijo_1.EMP_FIJO(id, nombre, sueldo, [], horasxdia, 0);
    yield database_1.db.conectarBD();
    let oSchema;
    let dSchemaFijo = {
        _tipoObjeto: null,
        _idEmpleado: null,
        _nombre: null,
        _sueldobase: null,
        _ventas: null,
        _complemento: null,
        _horasxdia: null
    };
    dSchemaFijo._tipoObjeto = "Fijo";
    dSchemaFijo._idEmpleado = e.id;
    dSchemaFijo._nombre = e.nombre;
    dSchemaFijo._sueldobase = e.sueldo();
    dSchemaFijo._ventas = e.ventas;
    dSchemaFijo._complemento = e.complemento;
    dSchemaFijo._horasxdia = e.horas;
    oSchema = new empleados_1.modeloEmpleado(dSchemaFijo);
    yield oSchema.save();
    yield database_1.db.desconectarBD();
});
exports.nuevoEmpleadoFijo = nuevoEmpleadoFijo;
const nuevoEmpleadoTemporal = () => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.db.conectarBD();
    const id = parseInt(yield (0, leerTeclado_1.leerTeclado)('ID '));
    const nombre = yield (0, leerTeclado_1.leerTeclado)('Nombre: ');
    const sueldo = parseInt(yield (0, leerTeclado_1.leerTeclado)('Sueldo base: '));
    let e = new empleadotemporal_1.EMP_TEMPORAL(id, nombre, sueldo, [], 0);
    yield database_1.db.conectarBD();
    let oSchema;
    let dSchemaTemporal = {
        _tipoObjeto: null,
        _idEmpleado: null,
        _nombre: null,
        _sueldobase: null,
        _ventas: null,
        _comisionVenta: null
    };
    dSchemaTemporal._tipoObjeto = "Temporal";
    dSchemaTemporal._idEmpleado = e.id;
    dSchemaTemporal._nombre = e.nombre;
    dSchemaTemporal._sueldobase = e.sueldo();
    dSchemaTemporal._ventas = e.ventas;
    dSchemaTemporal._comisionVenta = e.comision;
    oSchema = new empleados_1.modeloEmpleado(dSchemaTemporal);
    oSchema = new empleados_1.modeloEmpleado(dSchemaTemporal);
    yield oSchema.save();
    yield database_1.db.desconectarBD();
});
exports.nuevoEmpleadoTemporal = nuevoEmpleadoTemporal;
//------------------------------SALARIO------------------------
const salario = () => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.db.conectarBD();
    let dEmpleado;
    let tmpEmp;
    let query = yield empleados_1.modeloEmpleado.find({});
    for (dEmpleado of query) {
        if (dEmpleado._tipoObjeto == "Fijo") {
            tmpEmp = new empleadofijo_1.EMP_FIJO(dEmpleado._idEmpleado, dEmpleado._nombre, dEmpleado._sueldobase, dEmpleado._ventas, dEmpleado._complemento, dEmpleado._horasxdia);
            console.log("Nombre: " + tmpEmp.nombre + " Sueldo: " + tmpEmp.sueldo());
        }
        else if (dEmpleado._tipoObjeto == "Temporal") {
            tmpEmp = new empleadotemporal_1.EMP_TEMPORAL(dEmpleado._idEmpleado, dEmpleado._nombre, dEmpleado._sueldobase, dEmpleado._ventas, dEmpleado._comisionventa);
            console.log("Nombre: " + tmpEmp.nombre + " Sueldo: " + tmpEmp.sueldo());
        }
    }
    yield database_1.db.desconectarBD();
});
exports.salario = salario;
//----------REALIZAR VENTA---------------
const realizarVenta = () => __awaiter(void 0, void 0, void 0, function* () {
    let idEmp = parseInt(yield (0, leerTeclado_1.leerTeclado)('Ingresa tu ID (empleado) '));
    let id = parseInt(yield (0, leerTeclado_1.leerTeclado)('ID de la Vivienda que se va a vender '));
    let dEmpleado;
    let tmpFIJO = new empleadofijo_1.EMP_FIJO(0, "", 0, [], 0, 0);
    let tmpTEMP = new empleadotemporal_1.EMP_TEMPORAL(0, "", 0, [], 0);
    yield database_1.db.conectarBD();
    let query = yield empleados_1.modeloEmpleado.findOne({
        _idEmpleado: idEmp
    });
    dEmpleado = query;
    if (dEmpleado._tipoObjeto == "Fijo") {
        tmpFIJO = new empleadofijo_1.EMP_FIJO(dEmpleado._idEmpleado, dEmpleado._nombre, dEmpleado._sueldobase, dEmpleado._ventas, dEmpleado._complemento, dEmpleado._horasxdia);
    }
    else if (dEmpleado._tipoObjeto == "Temporal") {
        tmpTEMP = new empleadotemporal_1.EMP_TEMPORAL(dEmpleado._idEmpleado, dEmpleado._nombre, dEmpleado._sueldobase, dEmpleado._ventas, dEmpleado._comisionventa);
    }
    yield viviendas_1.modeloVivienda.findOneAndUpdate({ _idVivienda: id }, {
        "_estado.vendido": true,
        "_estado.fecha": new Date(),
        "_estado.empleado": idEmp
    }, {
        runValidators: true
    })
        .then(() => console.log('\nSe ha agregado una nueva venta a ' + dEmpleado._nombre))
        .catch((err) => console.log('\nError: ' + err));
    yield database_1.db.desconectarBD();
});
exports.realizarVenta = realizarVenta;
//-------------------------------VIVIENDAS VENDIDAS------------------------------------
const viviendasvendidas = () => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.db.conectarBD();
    let dVivi;
    let query = yield viviendas_1.modeloVivienda.find({ "_estado.vendido": true });
    for (dVivi of query) {
        if (dVivi._tipoObjeto == "Chalet") {
            let tmpChalet = new chalet_1.Chalet(dVivi._idVivienda, dVivi._largo, dVivi._ancho, {
                municipio: dVivi._ubicacion.municipio,
                ciudad: dVivi._ubicacion.ciudad,
                codpost: dVivi._ubicacion.codpost
            }, {
                habitaciones: dVivi._caracteristicas.habitaciones,
                baños: dVivi._caracteristicas.baños,
                ascensor: dVivi._caracteristicas.ascensor,
                equipamiento: [dVivi._caracteristicas.equipamiento]
            }, dVivi._preciom2, {
                vendido: dVivi._estado.vendido,
                fecha: dVivi._estado.fecha
            }, dVivi._piscina, dVivi._largojardin, dVivi._anchojardin);
            console.log(`${tmpChalet.todo()}`);
        }
        else {
            let tmpCasa = new casa_1.Casa(dVivi._idVivienda, dVivi._largo, dVivi._ancho, {
                municipio: dVivi._ubicacion.municipio,
                ciudad: dVivi._ubicacion.ciudad,
                codpost: dVivi._ubicacion.codpost
            }, {
                habitaciones: dVivi._caracteristicas.habitaciones,
                baños: dVivi._caracteristicas.baños,
                ascensor: dVivi._caracteristicas.ascensor,
                equipamiento: [dVivi._caracteristicas.equipamiento]
            }, dVivi._preciom2, {
                vendido: dVivi._estado.vendido,
                fecha: dVivi._estado.fecha
            }, dVivi._cochera);
            console.log(`${tmpCasa.todo()}`);
        }
    }
    yield database_1.db.desconectarBD();
});
exports.viviendasvendidas = viviendasvendidas;
