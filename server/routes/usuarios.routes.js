import { Router } from "express"; 
import { crearUsuario, buscarUsuario } from "../controller/index.controller.js";

const router = Router()

// Rutas para el usuario
router.get('/usuarios', buscarUsuario)
router.post('/usuarios', crearUsuario)

export default router;