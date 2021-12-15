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
exports.routes = void 0;
const express_1 = require("express");
const database_1 = require("../utilidades/database");
const viviendas_1 = require("../schemas/viviendas");
class DatoRoutes {
    constructor() {
        this.getViviendas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield viviendas_1.modeloVivienda.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            database_1.db.desconectarBD();
        });
        this.getTypes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { type } = req.params;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                console.log(mensaje);
                const query = yield viviendas_1.modeloVivienda.find({
                    _tipoObjeto: type
                });
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
                console.log(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.postAutos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { _tipoObjeto, _idVivienda, _largo, _ancho, municipio, ciudad, codpost, habitaciones, baños, ascensor, equipamiento0, equipamiento1, equipamiento2, _piscina, _largojardin, _anchojardin, _cochera } = req.body;
            yield database_1.db.conectarBD();
            let dSchemaViv = {
                "_tipoObjeto": _tipoObjeto,
                "_idVivienda": _idVivienda,
                "_largo": _largo,
                "_ancho": _ancho,
                "_ubicacion": {
                    "municipio": municipio,
                    "ciudad": ciudad,
                    "codpost": codpost,
                },
                "_caracteristicas": {
                    "habitaciones": habitaciones,
                    "baños": baños,
                    "ascensor": ascensor,
                    "equipamiento": [equipamiento0, equipamiento1, equipamiento2]
                },
                "_preciom2": null,
                "_estado": {
                    "vendido": null,
                    "fecha": null,
                    "empleado": null,
                },
                "_piscina": _piscina,
                "_largojardin": _largojardin,
                "_anchojardin": _anchojardin,
                "_cochera": _cochera
            };
            const oSchema = new viviendas_1.modeloVivienda(dSchemaViv);
            yield oSchema.save()
                .then((doc) => res.send("El automovil introducido es: " + doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    misRutas() {
        this._router.get('/viviendas', this.getViviendas);
        this._router.get('/viviendas/:type', this.getTypes);
        this._router.post('/auto', this.postAutos);
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;
