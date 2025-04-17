import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./db";
import sectorRoutes from './router'
import cors from "cors"

dotenv.config()

connectDB()

export const app = express()

app.use( cors() ) // permitir peticiones de cualquier lado

app.use( express.json() ) // soporte formato json

app.use('/api/sectors' , sectorRoutes )