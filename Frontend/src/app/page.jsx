"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { buscarUsuario } from "../controllers/index.controller";
import { useRouter } from "next/navigation";
import { agregarUsuario } from "../local";

export default function Login() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await buscarUsuario(data);
      if (response.length > 0) {
        agregarUsuario(response[0])
        alert("Inicio de sesión existoso.");
        router.push("/Home");
        // Agregar usuario en las cookies
      } else {
        alert("El correo y contraseña no son validos.");

      }

    } catch (error) {
      console.error("Error al buscar usuario:", error);
    }
  };

  const changePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <main className="contenedor flex items-center justify-center min-w-[600px]">
        <form
          className="flex flex-col gap-10 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Image
            className="m-auto"
            alt="Logo"
            src="/Logo.svg"
            width={350}
            height={350}
          />
          <h1 className="text-center font-semibold text-[30px] ">
            Inicio de sesión
          </h1>

          <div className="flex flex-col w-full gap-2">
            <p className="text-gray-300 font-semibold text-[20px]">Email</p>
            <input
              placeholder="example@email.com"
              type="email"
              className="flex h-10 w-full border-b-2 px-3 py-2 focus:outline-none"
              {...register("correo", {
                required: "El correo electronico es requerido.",
              })}
            />
            {errors.correo && (
              <span className="text-red-500">{errors.correo.message}</span>
            )}
          </div>

          <div className="flex flex-col w-full gap-2">
            <p className="text-gray-300 font-semibold text-[20px]">
              Contraseña
            </p>
            <label className="flex border-b-2">
              <input
                placeholder="****************"
                type={showPassword ? "text" : "password"}
                className="flex h-10 w-full border-none border-0 px-3 py-2 focus:outline-none"
                {...register("clave", {
                  required: "La contraseña es requerida.",
                })}
              />
              <Image
                className="m-auto cursor-pointer"
                alt={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                src={showPassword ? "/eyes_off.svg" : "/eye.svg"}
                width={30}
                height={30}
                onClick={changePassword}
              />
            </label>
            {errors.clave && (
              <span className="text-red-500">{errors.clave.message}</span>
            )}
          </div>

          <div className="text-center">
            <a
              href="./registrar"
              className=" text-slate-300 w-fit hover:underline"
            >
              No tienes cuenta? Registrate{" "}
            </a>
          </div>

          <button
            type="submit"
            className="bg-black text-slate-400 border border-slate-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
          >
            <span className="bg-slate-400 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-full h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Ingresar
          </button>
        </form>
      </main>
    </>
  );
}
