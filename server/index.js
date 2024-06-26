import 'dotenv/config'
import express from 'express'
import app from './app.js'
import { getConnection } from './conexion.js'

// Permite hacer la comunicación el backend con el frontend
import cors from 'cors'

// getConnection()

app.use(cors())
app.use(express.json)
app.listen(process.env.PORT)

console.log("Conectando al backend desde el puerto:", process.env.PORT)
