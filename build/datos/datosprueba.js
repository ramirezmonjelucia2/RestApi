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
exports.salvaremp = exports.salvarviv = void 0;
const empleadofijo_1 = require("../clases/empleados/empleadofijo");
const empleadotemporal_1 = require("../clases/empleados/empleadotemporal");
const casa_1 = require("../clases/viviendas/casa");
const chalet_1 = require("../clases/viviendas/chalet");
const empleados_1 = require("../schemas/empleados");
const viviendas_1 = require("../schemas/viviendas");
const database_1 = require("../utilidades/database");
const salvarviv = () => __awaiter(void 0, void 0, void 0, function* () {
    let viviendas = new Array();
    viviendas[0] = new chalet_1.Chalet(1, 20, 20, { municipio: "utrera", ciudad: "sevilla", codpost: 4123 }, { habitaciones: 3, baños: 2, ascensor: false, equipamiento: ["calefaccion", "aire acondicionado", "deposito de agua"] }, null, { vendido: false, fecha: null }, true, 8, 8);
    viviendas[1] = new casa_1.Casa(3, 20, 20, { municipio: "marbella", ciudad: "malaga", codpost: 4123 }, { habitaciones: 3, baños: 2, ascensor: false, equipamiento: ["calefaccion", "aire acondicionado", "deposito de agua"] }, null, { vendido: false, fecha: null }, true);
    viviendas[2] = new casa_1.Casa(4, 20, 20, { municipio: "linares", ciudad: "jaen", codpost: 4123 }, { habitaciones: 3, baños: 2, ascensor: false, equipamiento: ["calefaccion", "aire acondicionado", "deposito de agua"] }, null, { vendido: false, fecha: null }, false);
    viviendas[3] = new chalet_1.Chalet(5, 20, 20, { municipio: "ayamonte", ciudad: "huelva", codpost: 4123 }, { habitaciones: 3, baños: 2, ascensor: false, equipamiento: ["calefaccion", "aire acondicionado", "deposito de agua"] }, null, { vendido: false, fecha: null }, true, 8, 8);
    viviendas[4] = new chalet_1.Chalet(6, 20, 20, { municipio: "chipiona", ciudad: "cadiz", codpost: 4123 }, { habitaciones: 3, baños: 2, ascensor: false, equipamiento: ["calefaccion", "aire acondicionado", "deposito de agua"] }, null, { vendido: false, fecha: null }, false, 8, 8);
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
    yield database_1.db.conectarBD();
    yield viviendas_1.modeloVivienda.deleteMany({});
    for (let v of viviendas) {
        dShemaChalet._idVivienda = dShemaCasa._idVivienda = v.idVivienda;
        dShemaChalet._largo = dShemaCasa._largo = v.largo;
        dShemaChalet._ancho = dShemaCasa._ancho = v.ancho;
        dShemaChalet._ubicacion.municipio = dShemaCasa._ubicacion.municipio = v.ubicacion.municipio;
        dShemaChalet._ubicacion.ciudad = dShemaCasa._ubicacion.ciudad = v.ubicacion.ciudad;
        dShemaChalet._ubicacion.codpost = dShemaCasa._ubicacion.codpost = v.ubicacion.codpost;
        dShemaChalet._caracteristicas.habitaciones = dShemaCasa._caracteristicas.habitaciones = v.caracteristicas.habitaciones;
        dShemaChalet._caracteristicas.baños = dShemaCasa._caracteristicas.baños = v.caracteristicas.baños;
        dShemaChalet._caracteristicas.ascensor = dShemaCasa._caracteristicas.ascensor = v.caracteristicas.ascensor;
        dShemaChalet._caracteristicas.equipamiento = dShemaCasa._caracteristicas.equipamiento = v.caracteristicas.equipamiento;
        dShemaChalet._preciom2 = dShemaCasa._preciom2 = v.preciom2();
        dShemaChalet._estado.vendido = dShemaCasa._estado.vendido = v.estado.vendido;
        dShemaChalet._estado.fecha = dShemaCasa._estado.fecha = v.estado.fecha;
        if (v instanceof casa_1.Casa) {
            dShemaCasa._tipoObjeto = "Casa";
            dShemaCasa._cochera = v.cochera;
            oSchema = new viviendas_1.modeloVivienda(dShemaCasa);
        }
        else if (v instanceof chalet_1.Chalet) {
            dShemaChalet._tipoObjeto = "Chalet";
            dShemaChalet._piscina = v.piscina;
            dShemaChalet._largojardin = v.largojardin;
            dShemaChalet._anchojardin = v.anchojardin;
            oSchema = new viviendas_1.modeloVivienda(dShemaChalet);
        }
        yield oSchema.save();
    }
    yield database_1.db.desconectarBD();
});
exports.salvarviv = salvarviv;
const salvaremp = () => __awaiter(void 0, void 0, void 0, function* () {
    let empleados = new Array();
    empleados[0] = new empleadofijo_1.EMP_FIJO(1, "pepe", 900, [], 250, 7);
    empleados[1] = new empleadotemporal_1.EMP_TEMPORAL(2, "ana", 1000, [], 50);
    empleados[2] = new empleadotemporal_1.EMP_TEMPORAL(3, "jesus", 1500, [], 30);
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
    let dSchemaTemporal = {
        _tipoObjeto: null,
        _idEmpleado: null,
        _nombre: null,
        _sueldobase: null,
        _ventas: null,
        _comisionVenta: null
    };
    yield database_1.db.conectarBD();
    yield empleados_1.modeloEmpleado.deleteMany({});
    for (let e of empleados) {
        dSchemaFijo._idEmpleado = dSchemaTemporal._idEmpleado = e.id;
        dSchemaFijo._nombre = dSchemaTemporal._nombre = e.nombre;
        dSchemaFijo._sueldobase = dSchemaTemporal._sueldobase = e.sueldo();
        dSchemaFijo._ventas = dSchemaTemporal._ventas = e.ventas;
        if (e instanceof empleadofijo_1.EMP_FIJO) {
            dSchemaFijo._tipoObjeto = "Fijo";
            dSchemaFijo._complemento = e.complemento;
            dSchemaFijo._horasxdia = e.horas;
            oSchema = new empleados_1.modeloEmpleado(dSchemaFijo);
        }
        else if (e instanceof empleadotemporal_1.EMP_TEMPORAL) {
            dSchemaTemporal._tipoObjeto = "Temporal";
            dSchemaTemporal._comisionVenta = e.comision;
            oSchema = new empleados_1.modeloEmpleado(dSchemaTemporal);
        }
        yield oSchema.save();
    }
    yield database_1.db.desconectarBD();
});
exports.salvaremp = salvaremp;
