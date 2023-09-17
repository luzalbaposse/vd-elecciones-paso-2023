/* eslint-disable @next/next/no-img-element */
import React from 'react';
import NavigationButtons from '../components/NavButtons';
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[length:1920px_1080px] bg-[url('../public/cambio-voto-bg.png')]">
    <div className="absolute">
        <NavigationButtons prevUrl="/nueva-fuerza" nextUrl="/cambio-voto" />
    </div>  
    <div className="mr-96 mb-96 text-left">
        <div className="text-left">
        <h1 className="text-black font-montserrat text-4xl font-normal mb-2">
          UN CAMBIO EN
        </h1>
        <h1 className="text-black font-montserrat text-7xl font-bold mb-2">
          EL VOTO
        </h1>
        </div>       
        <p className="text-black font-montserrat text-lg mb-12 max-w-md">
        Ciertas zonas de la Ciudad de Buenos Aires que solían estar coloreadas de <span className="bg-blue-200">azul</span>, toman un tinte <span className="bg-purple-200">violeta</span>.</p>
      </div>

  </main>
  )
}
