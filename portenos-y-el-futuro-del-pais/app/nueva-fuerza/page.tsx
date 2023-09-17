import React from 'react';
import NavigationButtons from '../components/NavButtons';
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[length:1920px_1080px] bg-[url('../public/votobg.png')]">
    <div className="absolute">
        <NavigationButtons prevUrl="/" nextUrl="/eleccion-portenos" />
      </div>  
      <div className="ml-auto text-right">
        <h1 className="text-black font-montserrat text-4xl font-normal mb-2">
          UNA NUEVA
        </h1>
        <h1 className="text-black font-montserrat text-7xl font-bold mb-2">
          FUERZA
        </h1>
        <p className="text-black font-montserrat text-lg italic mb-12">
          13/08/2023 - CABA
        </p>
        <p className="text-black font-montserrat text-lg mb-12 max-w-md">
          Se celebraron las PASO a lo largo y ancho de todo el país. Se vivió un fenómeno extraño: apareció una tercera fuerza. Si bien en CABA, la tendencia hacia JxC fue marcada, La Libertad Avanza comenzó a tomar relevancia.
        </p>
      </div>

  </main>
  )
}
