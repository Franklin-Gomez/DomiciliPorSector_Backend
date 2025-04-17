import { Request , response, Response } from "express"
import Sector from "../models/SectorModel"

// static ? = no requiere ser instanciado
export class SectorController { 

    static createSector = async ( req : Request , res : Response) => { 

        const data = new Sector(req.body)

        try {

            await data.save()
            res.send('Sector Agregado Correctamente')

        } catch (error) {
            res.status(400).json({error : 'Hubo un error' })
        }
 
    }

    static getAllSector = async ( req : Request , res : Response) => { 
        try {

            const data = await Sector.find()
            res.send( data )

        } catch (error) {
            res.status(400).json({error : 'Hubo un error' })
        }
    }

    static deleteSector = async ( req : Request , res : Response ) =>  {

        try {
            
            const id  = req.params.id

            const data = await Sector.findByIdAndDelete(id)

            if(!data) { 
                const error = new Error('Sector no Encontrado')
                res.status(404).json({ error : error.message})
                return
            }

            res.send('Registro Eliminado Correctamente')

        } catch (error) {

            res.status(400).json({error : 'Hubo un error' })

        }
    }

    static validateSectors = async  (req : Request , res : Response ) => { 
        const ahora = new Date();
        const horaActual = ahora.toTimeString().slice(0, 5); // formato "HH:MM"

        try {
            
            const data = await Sector.find()
            
            //filtrado de sectores disponibles a partir de la hora actual.
            const disponibles = data.filter((sector) => {
                return (
                    horaActual >= sector.horario.apertura &&
                    horaActual <= sector.horario.cierre
                );
            });

            res.json(disponibles)

        } catch (error) {

            res.status(400).json({error : 'Hubo un error' })

        }


        

    }


}