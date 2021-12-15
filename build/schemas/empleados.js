"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modeloEmpleado = void 0;
const mongoose_1 = require("mongoose");
const empleadoSchema = new mongoose_1.Schema({
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
});
exports.modeloEmpleado = (0, mongoose_1.model)('empleados', empleadoSchema);
