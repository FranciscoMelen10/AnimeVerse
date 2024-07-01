import { getConnection } from "../conexion.js";
import sql from "mssql";

export const crearFavoritos = async (req, res) => {
  // Datos del frontend al backend
//   console.log(req.body.params);

  // Cadena de conexión
  const pool = await getConnection();

  try {
    // Consulta a la BD
    const respuesta = await pool
      .request()
      .input("id_usuario", sql.Int, req.body.params.id_usuario)
      .input("id_anime", sql.Int, req.body.params.id_anime)
      .query(
        "IF NOT EXISTS(SELECT 1 FROM AnimeVerse.dbo.Favoritos WHERE id_usuario = @id_usuario AND id_anime = @id_anime) BEGIN INSERT INTO AnimeVerse.dbo.Favoritos(id_usuario, id_anime) VALUES ( @id_usuario , @id_anime) END; SELECT SCOPE_IDENTITY() AS id;"
      );

    /*
        Si todo esta bien, enviara esta respuesta:
        {
            recordsets: [ [ [Object] ] ],
            recordset: [ { id: 14 } ],
            output: {},
            rowsAffected: [ 1, 1 ]
        }
            
        Si esta mal, mandara esto:
        {
            recordsets: [],
            recordset: undefined,
            output: {},
            rowsAffected: [ 0 ]
        }
        */
    // console.log(respuesta);

    // res.json({ respuesta: respuesta.recordset[0].id ? true : false });
  } catch (error) {
    console.log("crearUsuario: ", error);
    res.status(500).send("Error en el servidor");
  }
};

export const eliminarFavoritos = async (req, res) => {
  // Datos del frontend al backend
    // console.log(req.query.id_usuario);
    // console.log(req.query.id_anime);

  // Cadena de conexión
  const pool = await getConnection();

  try {
    // Consulta a la BD
    const respuesta = await pool
      .request()
      .input("id_usuario", sql.Int, req.query.id_usuario)
      .input("id_anime", sql.Int, req.query.id_anime)
      .query(
        "DELETE FROM AnimeVerse.dbo.Favoritos WHERE id_usuario = @id_usuario AND id_anime = @id_anime"
      );

    /*
            Si todo esta bien, enviara esta respuesta:
            {
                recordsets: [],
                recordset: undefined,
                output: {},
                rowsAffected: [ 1 ]
            },

            Si esta mal, mandara esto:
            {
                recordsets: [],
                recordset: undefined,
                output: {},
                rowsAffected: [ 0 ]
            }
        */

    res.json(respuesta);
  } catch (error) {
    console.log("eliminarFavoritos: ", error);
    res.status(500).send("Error en el servidor");
  }
};

export const buscarFavoritos = async (req, res) => {
  // Datos del frontend al backend
//   console.log(req.query);

  // Cadena de conexión
  const pool = await getConnection();

  try {
    // Consulta a la BD
    const respuesta = await pool
      .request()
      .input("id_usuario", sql.Int, req.query.id_usuario)
      .query(
        "SELECT * FROM AnimeVerse.dbo.Favoritos WHERE id_usuario = @id_usuario"
      );

    /* 
            Si todo estaba bien, la respuesta sera:
            {
                recordsets: [ [ [Object], [Object], [Object] ] ],
                recordset: [
                    { id_favorito: 7, id_usuario: 3, id_anime: 2 },
                    { id_favorito: 8, id_usuario: 3, id_anime: 3 },
                    { id_favorito: 9, id_usuario: 3, id_anime: 5 }
                ],
                output: {},
                rowsAffected: [ 3 ]
            }

            Si no encuentra ningun registro en la bd, mandara esto:
            {
                recordsets: [ [ [Object], [Object], [Object] ] ],
                recordset: [
                    { id_favorito: 7, id_usuario: 3, id_anime: 2 },
                    { id_favorito: 8, id_usuario: 3, id_anime: 3 },
                    { id_favorito: 9, id_usuario: 3, id_anime: 5 }
                ],
                output: {},
                rowsAffected: [ 3 ]
            }
        */

    // console.log(respuesta);

    res.json(respuesta.recordset);
  } catch (error) {
    console.log("buscarFavoritos: ", error);
    res.status(500).send("Error en el servidor");
  }
};

export const existeFavorito = async (req, res) => {
  // Datos del frontend al backend

  // Cadena de conexión
  const pool = await getConnection();

  try {
    // Consulta a la BD
    const respuesta = await pool
      .request()
      .input("id_anime", sql.Int, req.params.id)
      .input("id_usuario", sql.Int, req.query.id_usuario)
      .query(
        "SELECT * FROM AnimeVerse.dbo.Favoritos WHERE id_anime = @id_anime AND id_usuario = @id_usuario"
      );

    // console.log(respuesta.recordset.length);

    res.json(respuesta.recordset);
  } catch (error) {
    console.log("existeFavorito: ", error);
    res.status(500).send("Error en el servidor");
  }
};
