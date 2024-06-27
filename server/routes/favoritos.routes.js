import { Router } from "express"; 
import { buscarFavoritos, crearFavoritos, eliminarFavoritos } from "../controller/index.controller.js";

const router = Router()

// Rutas para favoritos
router.get('/favoritos', buscarFavoritos)
router.post('/favoritos', crearFavoritos)
router.delete('/favoritos', eliminarFavoritos)

export default router;