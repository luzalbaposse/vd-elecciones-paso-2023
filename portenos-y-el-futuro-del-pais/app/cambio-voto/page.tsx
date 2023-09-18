/* eslint-disable @next/next/no-img-element */
import React from 'react';
import NavigationButtons from '../components/NavButtons';
export default function Home() {

  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: `url(/cambio-voto-bg.png)` }}>
    <div className="absolute">
        <NavigationButtons prevUrl="/eleccion-portenos" nextUrl="/mapas-caba" />
    </div>  
    <div className="flex space-x-4 mr-0 ml-96 mb-auto mt-2 text-left">
        <div className="text-right">
        <h1 className="text-black font-montserrat text-4xl font-light tracking-widest	mb-2">
          UN CAMBIO EN
        </h1>
        <h1 className="text-black font-montserrat text-8xl font-bold mb-2">
          EL VOTO
        </h1>
        </div>       
        <p className="text-black font-montserrat text-lg mb-12 w-1/3">
        Ciertas zonas de la Ciudad de Buenos Aires que solían estar coloreadas de azul, toman un tinte violeta.</p>
      </div>

  </main>
  )
}
