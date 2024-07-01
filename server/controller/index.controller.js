import { crearFavoritos, buscarFavoritos, eliminarFavoritos, existeFavorito } from "./favorito.controller.js";
import { crearUsuario, buscarUsuario } from "./usuario.controller.js";

/*

    Formas de evitar el sql injection:

    1) Sentencias preparadas o consultas parametrizadas: En lugar de concatenar directamente las consultas SQL en el código, 
    utiliza sentencias preparadas o consultas parametrizadas. Esto es más seguro y evita la inyección SQL.

    2) Limita los privilegios de la cuenta de base de datos: Asigna permisos mínimos necesarios a las cuentas de usuario en la base de datos.
    Esto reduce el riesgo de que un atacante pueda acceder a datos malicioso.

*/

export {
    crearUsuario,
    buscarUsuario,
    crearFavoritos,
    buscarFavoritos,
    eliminarFavoritos,
    existeFavorito
}