import React from 'react';
import NavigationButtons from '../components/NavButtons';
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: `url(/votobg.png)` }}>
    <div className="absolute z-0">
        <NavigationButtons prevUrl="/" nextUrl="/eleccion-portenos" />
      </div>  
      <div className="ml-auto text-right z-10">
        <h1 className="text-black font-montserrat text-4xl font-light	tracking-widest	mb-2">
          UNA NUEVA
        </h1>
        <h1 className="text-black font-montserrat text-8xl	 font-bold mb-2">
          FUERZA
        </h1>
        <p className="text-black font-montserrat text-xl italic mb-2">
          13/08/2023 - CABA
        </p>
        <div className="w-1/4	text-right ml-auto mt-52">
        <p className="text-black font-montserrat text-xl mb-0 text-right">
          Se celebraron las PASO a lo largo y ancho de todo el país. Se vivió un fenómeno extraño: apareció una tercera fuerza. Si bien en CABA, la tendencia hacia JxC fue marcada, La Libertad Avanza comenzó a tomar relevancia.
        </p>
        </div>
        
      </div>

  </main>
  )
}
