import { Router } from "express"; 
import { buscarFavoritos, crearFavoritos, eliminarFavoritos } from "../controller/index.controller.js";
import { existeFavorito } from "../controller/favorito.controller.js";

const router = Router()

// Rutas para favoritos
router.get('/favoritos', buscarFavoritos)
router.get('/favoritos/:id', existeFavorito)
router.post('/favoritos', crearFavoritos)
router.delete('/favoritos', eliminarFavoritos)

export default router;