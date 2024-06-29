import { getConnection } from "../conexion.js"
import sql from 'mssql'

export const crearUsuario = async (req, res) => {
    // Datos del frontend al backend
    // console.log(req.body.params)

    // Cadena de conexión
    const pool = await getConnection();

    try {
        // Consulta a la BD
        const respuesta = await pool.request().input('nombre', sql.VarChar, req.body.params.nombre).input('correo', sql.VarChar, req.body.params.correo).input('contrasena', sql.VarChar, req.body.params.contrasena).query('IF NOT EXISTS(SELECT 1 FROM AnimeVerse.dbo.Usuarios WHERE correo = @correo) BEGIN INSERT INTO AnimeVerse.dbo.Usuarios(correo, nombre, contrasena) VALUES ( @correo , @nombre , @contrasena) END; SELECT SCOPE_IDENTITY() AS id;')

        /* 
            Si todo esta bien, la respuesta sera:
            {
                recordsets: [ [ [Object] ] ],
                recordset: [ { id: 20 } ],
                output: {},
                rowsAffected: [ 1, 1 ]
            }
            Si no esta bien, mandara esto:
            {
                recordsets: [ [ [Object] ] ],
                recordset: [ { id: null } ],
                output: {},
                rowsAffected: [ 1 ]
            }
        */

        // Respuesta en json para el frontend
        const json =
        {
            id_usuario: respuesta.recordset[0].id, // Obtener el id del ultimo registro
            nombre: req.body.params.nombre,
            correo: req.body.params.correo,
            contrasena: req.body.params.contrasena,
        }

        res.json(json)

    } catch (error) {
        console.log("crearUsuario: ", error)
        res.status(500).send('Error en el servidor');
    }

}

export const buscarUsuario = async (req, res) => {
    // Datos del frontend al backend
    // console.log(req.query)

    // Cadena de conexión
    const pool = await getConnection();    

    try {
        // Consulta a la BD
        const respuesta = await pool.request().input('correo', sql.VarChar, req.query.correo).input('contrasena', sql.VarChar, req.query.contrasena).query('SELECT * FROM AnimeVerse.dbo.Usuarios WHERE correo = @correo AND contrasena = @contrasena')

        /*
            Si encuentra a un usuario, la respuesta sera:
            {
            recordsets: [ [ [Object] ] ],
            recordset: [
                {
                id_usuario: 1,
                correo: '',
                nombre: '',
                contrasena: ''
                }
            ],
            output: {},
            rowsAffected: [ 1 ]
            }

            Si no lo encuentra, mandara esto:
            { recordsets: [ [] ], recordset: [], output: {}, rowsAffected: [ 0 ] }
        */

        // Registro que encontro
        res.json(respuesta.recordset)


    } catch (error) {
        console.log("buscarUsuario: ", error)
        res.status(500).send('Error en el servidor');
    }
}


