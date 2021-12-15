import { salvaremp, salvarviv } from "./datos/datosprueba"
import { nuevaCasa, nuevoChalet, nuevoEmpleadoFijo, nuevoEmpleadoTemporal, realizarVenta, salario, viviendasvendidas } from "./utilidades/funciones"
import { leerTeclado } from "./utilidades/leerTeclado"


export const menu = async () => {
    let n: number
    console.log("\n")
    console.log('[ 1 ] - AÑADIR EMPLEADO FIJO')
    console.log('[ 2 ] - AÑADIR EMPLEADO TEMPORAL')
    console.log('[ 3 ] - AÑADIR CASA')
    console.log('[ 4 ] - AÑADIR CHALET')
    console.log('[ 5 ] - SALARIOS')
    console.log('[ 6 ] - REALIZAR VENTA')
    console.log('[ 7 ] - VER VIVIENDAS VENDIDAS')
    console.log('[ 8 ] - DATOS DE PRUEBA')
    console.log('[ 9 ] - SALIR')
    n = parseInt(await leerTeclado('--OPCIÓN--'))
    return n
}
const main = async () => {
    let n: number
    do {
        n = await menu()

        switch (n) {
            case 1:
                await nuevoEmpleadoFijo()
                break
            case 2:
                await nuevoEmpleadoTemporal()
                break
            case 3:
                await nuevaCasa()
                break
            case 4:
                await nuevoChalet()
                break
            case 5:
                await salario()
                break
            case 6:
                await realizarVenta()
                break
            case 7:
                await viviendasvendidas()
                break
            case 8:
                await salvaremp()
                await salvarviv()
            default:
                console.log("¡HASTA PRONTO!")
                break

        }
    } while (n != 9)
}

main()
