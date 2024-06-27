import axios from "axios";

export const buscarUsuario = async (data) => {
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_ENV_USUARIOS, {
            params: {
                correo: data.correo,
                contrasena: data.clave
            }
        });
        return response.data;
    } catch (error) {
        console.log("BuscarUsuario: ", error);
    }
}

export const crearUsuario = async (data) => {
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_ENV_USUARIOS, {
            params: {
                nombre: data.nombre,
                correo: data.correo,
                contrasena: data.clave,
            }
        });
        return response.data;
    } catch (error) {
        console.log("crearUsuario: ", error);
    }
}
