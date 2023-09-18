/* eslint-disable @next/next/no-img-element */
import React from 'react';
import NavigationButtons from '../components/NavButtons';
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center bg-white" style={{ backgroundImage: `url(/nueva-lider-bg.png)`,     transition: 'background-image 0.5s ease-in-out'
  }}>
    <div className="absolute">
        <NavigationButtons prevUrl="/dato-pobreza" nextUrl="/nadie-voto" />
    </div>  
    <div className="mt-8 mb-auto text-center">
    <h1 className="text-black font-montserrat text-4xl font-light tracking-widest	mb-2">
          JUNTOS POR EL CAMBIO
        </h1>
        <h1 className="text-black font-montserrat text-8xl font-bold mb-2">
          NUEVA LÍDER
        </h1>
      </div>
  </main>
  )
}
