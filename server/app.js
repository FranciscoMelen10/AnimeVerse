import express from 'express'
import routerUser from './routes/usuarios.routes.js'
import routerFavoritos from './routes/favoritos.routes.js'
import cors from 'cors' // Permite hacer la comunicación el backend con el frontend

const app = express()

app.use(express.json())
app.use(cors())
app.use(routerUser)
app.use(routerFavoritos)

export default app