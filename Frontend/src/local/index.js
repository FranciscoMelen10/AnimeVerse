// Función para agregar un usuario al localStorage
export const agregarUsuario = (data) => {
    try {
        // Convertir data a una cadena JSON antes de almacenarla
        const jsonData = JSON.stringify(data);
        localStorage.setItem('usuario', jsonData);
    } catch (error) {
        console.error('Error al agregar usuario:', error);
    }
}

// Función para obtener un usuario del localStorage
export const obtenerUsuario = () => {
    try {
        const usuario = localStorage.getItem('usuario');
        if (usuario) {
            // Parsear la cadena JSON a un objeto
            return JSON.parse(usuario);
        }
        return null; // Retorna null si no hay usuario almacenado
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        return null;
    }
}

// Función para eliminar un usuario del localStorage
export const eliminarUsuario = () => {
    try {
        localStorage.removeItem('usuario');
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
    }
}
