import { Request, Response, Router } from 'express'
import { db } from '../utilidades/database'
import { modeloVivienda, totVivi } from '../schemas/viviendas'

class DatoRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router() {
        return this._router
    }

    private getViviendas = async (req: Request, res: Response) => {
        await db.conectarBD()
            .then(async (mensaje) => {
                console.log(mensaje)
                const query = await modeloVivienda.find({})
                res.json(query)
            })
            .catch((mensaje) => {
                res.send(mensaje)
            })

        db.desconectarBD()
    }

    private getTypes = async (req: Request, res: Response) => {
        const { type } = req.params
        await db.conectarBD()
            .then(
                async (mensaje) => {
                    console.log(mensaje)
                    const query = await modeloVivienda.find(
                        {

                            _tipoObjeto: type
                        }
                    )
                    res.json(query)
                })
            .catch(
                (mensaje) => {
                    res.send(mensaje)
                    console.log(mensaje)
                })
        await db.desconectarBD()
    }



    private postAutos = async (req: Request, res: Response) => {
        const { _tipoObjeto,
            _idVivienda,
            _largo,
            _ancho,
            municipio,
            ciudad,
            codpost,
            habitaciones,
            baños,
            ascensor,
            equipamiento0,
            equipamiento1,
            equipamiento2,
            _piscina,
            _largojardin,
            _anchojardin,
            _cochera } = req.body

        await db.conectarBD()
        let dSchemaViv: totVivi = {
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
        }
        const oSchema = new modeloVivienda(dSchemaViv)
        await oSchema.save()
            .then((doc: any) => res.send("El automovil introducido es: " + doc))
            .catch((err: any) => res.send('Error: ' + err))
        await db.desconectarBD()
    }


    misRutas() {
        this._router.get('/viviendas', this.getViviendas)
        this._router.get('/viviendas/:tipo', this.getTypes)
        this._router.post('/auto', this.postAutos)

    }
}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router
