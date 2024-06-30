"use client"
import { useEffect, useState } from "react";
import { obtenerUsuario } from "../local/index.js";
import LoadingPage from "../app/loading.jsx";
import Link from "next/link.js";

export default function LayoutUser({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const user = obtenerUsuario();
    setUsuario(user);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (usuario) {
    return <>{children}</>;
  } else {
    return (
      <div className="flex items-center justify-center flex-col min-h-screen gap-5">
        <h1 className="text-xl font-bold">Error al entrar al menú, por favor inicie sesión.</h1>
        <Link href="/" className="text-slate-300 w-fit hover:underline">Inicio de sesión</Link>
      </div>
    );
  }
}
