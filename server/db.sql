
-- Crear la tabla de usuarios
CREATE TABLE Usuarios (
    id_usuario INT IDENTITY(1,1) PRIMARY KEY,
    correo VARCHAR(255) NOT NULL UNIQUE,
    nombre VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL
);

-- Crear la tabla de favoritos
CREATE TABLE Favoritos (
    id_favorito INT IDENTITY(1,1) PRIMARY KEY,
    id_usuario INT,
    id_anime INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);