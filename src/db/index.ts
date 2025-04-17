import mongoose from 'mongoose'

export const connectDB = async () => { 

    try {
        // conexion a la db 
        const conection = await mongoose.connect( process.env.DATABASE_URL )

        const url = `${conection.connection.host}:${conection.connection.port}`

        console.log( `MongoDB Conectado en : ${url}`)

    } catch (error) {
        console.log( 'error al conectar a la DB ')
        process.exit(1) // code 1 - error conection
    }
}