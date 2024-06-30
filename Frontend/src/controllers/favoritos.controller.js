import axios from "axios";

export const buscarFavoritos = async (id_usuario) => {
  try {
    console.log(id_usuario)
    const response = await axios.get(process.env.NEXT_PUBLIC_ENV_FAVORITOS, {
      params: {
        id_usuario: id_usuario,
      },
    });
    return response.data;
  } catch (error) {
    console.log("BuscarUsuario: ", error);
  }
};

export const crearFavorito = async (id_usuario, id_anime) => {
  try {
    const response = await axios.post(process.env.NEXT_PUBLIC_ENV_FAVORITOS, {
      params: {
        id_usuario: id_usuario,
        id_anime: id_anime,
      },
    });
    return response.data;
  } catch (error) {
    console.log("crearUsuario: ", error);
  }
};

export const eliminarFavorito = async (id_usuario, id_anime) => {
  try {
    const response = await axios.delete(process.env.NEXT_PUBLIC_ENV_FAVORITOS, {
      params: {
        id_usuario: id_usuario,
        id_anime: id_anime,
      },
    });
    return response.data;
  } catch (error) {
    console.log("eliminarFavorito: ", error);
  }
};
