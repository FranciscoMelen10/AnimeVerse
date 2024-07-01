"use client";
import React, { useState, useEffect } from "react";
import { obtenerUsuario } from "../../local";
import "./Corazon.css";
import {
  crearFavorito,
  eliminarFavorito,
  existeFavorito,
} from "../../controllers/index.controller";

function Corazon({ id_anime }) {
  const [active, setActive] = useState(false);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const fetchFavoritos = async () => {
      try {
        const user = obtenerUsuario();
        setUsuario(user);
        const existe = await existeFavorito(user.id_usuario, id_anime);
        setActive(existe.length > 0);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavoritos();
  }, [id_anime]);

  const handleClick = async () => {
    try {
      if (active) {
        setActive(!active);
        alert("Se ha eliminado de favoritos");
        await eliminarFavorito(usuario.id_usuario, id_anime);
        
      } else {
        setActive(!active);
        alert("Se ha guardado en favoritos");
        await crearFavorito(usuario.id_usuario, id_anime);
      }
    } catch (error) {
      console.error("Error handling favorite action:", error);
      alert("Error al actualizar favoritos");
    }
  };

  return (
    <label className="corazon pr-4">
      <input type="checkbox" checked={active} onChange={handleClick} />
      <div className="checkmark">
        <svg viewBox="0 0 256 256">
          <path
            d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z"
            stroke="#000"
            fill="#FFF"
            strokeWidth="3" /* Aumenta este valor para un borde más grueso */
          ></path>
        </svg>
      </div>
    </label>
  );
}

export default Corazon;
