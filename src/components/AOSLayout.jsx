"use client"
import AOS from "aos"
import { useEffect } from "react"
import "aos/dist/aos.css";


export default function AOSLayout({ children }) {
    
    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <main className="flex flex-col justify-center items-center text-color_100 min-h-screen">
            {children}
        </main>
    )
}