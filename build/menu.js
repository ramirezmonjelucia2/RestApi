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
exports.menu = void 0;
const datosprueba_1 = require("./datos/datosprueba");
const funciones_1 = require("./utilidades/funciones");
const leerTeclado_1 = require("./utilidades/leerTeclado");
const menu = () => __awaiter(void 0, void 0, void 0, function* () {
    let n;
    console.log("\n");
    console.log('[ 1 ] - AÑADIR EMPLEADO FIJO');
    console.log('[ 2 ] - AÑADIR EMPLEADO TEMPORAL');
    console.log('[ 3 ] - AÑADIR CASA');
    console.log('[ 4 ] - AÑADIR CHALET');
    console.log('[ 5 ] - SALARIOS');
    console.log('[ 6 ] - REALIZAR VENTA');
    console.log('[ 7 ] - VER VIVIENDAS VENDIDAS');
    console.log('[ 8 ] - DATOS DE PRUEBA');
    console.log('[ 9 ] - SALIR');
    n = parseInt(yield (0, leerTeclado_1.leerTeclado)('--OPCIÓN--'));
    return n;
});
exports.menu = menu;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let n;
    do {
        n = yield (0, exports.menu)();
        switch (n) {
            case 1:
                yield (0, funciones_1.nuevoEmpleadoFijo)();
                break;
            case 2:
                yield (0, funciones_1.nuevoEmpleadoTemporal)();
                break;
            case 3:
                yield (0, funciones_1.nuevaCasa)();
                break;
            case 4:
                yield (0, funciones_1.nuevoChalet)();
                break;
            case 5:
                yield (0, funciones_1.salario)();
                break;
            case 6:
                yield (0, funciones_1.realizarVenta)();
                break;
            case 7:
                yield (0, funciones_1.viviendasvendidas)();
                break;
            case 8:
                yield (0, datosprueba_1.salvaremp)();
                yield (0, datosprueba_1.salvarviv)();
            default:
                console.log("¡HASTA PRONTO!");
                break;
        }
    } while (n != 9);
});
main();
