-- Crear la tabla de usuarios
CREATE TABLE Usuarios (
    id_usuario INT IDENTITY(1, 1) PRIMARY KEY,
    correo VARCHAR(255) NOT NULL UNIQUE,
    nombre VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL
);

-- Crear la tabla de favoritos
CREATE TABLE Favoritos (
    id_favorito INT IDENTITY(1, 1) PRIMARY KEY,
    id_usuario INT,
    id_anime INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- Insertar datos en la tabla de usuarios
INSERT INTO
    AnimeVerse.dbo.Usuarios(correo, nombre, contrasena)
VALUES
    (
        'francisco@example.com',
        'Francisco',
        'password1'
    ),
    (
        'rene@example.com',
        'Rene',
        'password2'
    ),
    (
        'osmar@example.com',
        'Osmar',
        'password3'
    );

-- Insertar datos en la tabla de favoritos
INSERT INTO
    AnimeVerse.dbo.Favoritos (id_usuario, id_anime)
VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (2, 1),
    (2, 4),
    (2, 5),
    (3, 2),
    (3, 3),
    (3, 5);

/* Crud de usuarios */
SELECT
    *
FROM
    AnimeVerse.dbo.Usuarios
WHERE
    correo = @correo
    AND contrasena = @contrasena;

-- Verificar si el usuario ya existe
IF NOT EXISTS (
    SELECT
        1
    FROM
        AnimeVerse.dbo.Usuarios
    WHERE
        correo = @correo
) BEGIN -- Si no existe, crear el nuevo usuario
INSERT INTO
    AnimeVerse.dbo.Usuarios (correo, nombre, contrasena)
VALUES
    (@correo, @nombre, @contrasena);

END
/* Crud de favoritos */
-- Buscar favoritos por usuario
IF NOT EXISTS(
    SELECT
        1
    FROM
        AnimeVerse.dbo.Favoritos
    WHERE
        id_usuario = @id_usuario
        AND id_anime = @id_anime
) BEGIN
INSERT INTO
    AnimeVerse.dbo.Favoritos(id_usuario, id_anime)
VALUES
    (@id_usuario, @id_anime)
END;

SELECT
    SCOPE_IDENTITY() AS id; -- Seleccionar

-- Agregar favoritos
INSERT INTO
    AnimeVerse.dbo.Favoritos
WHERE
    id_usuario = @id_usuario
    AND id_anime = @id_anime 
    
-- Eliminar favoritos
DELETE FROM
    AnimeVerse.dbo.Favoritos
WHERE
    id_usuario = @id_usuario
    AND id_anime = @id_anime