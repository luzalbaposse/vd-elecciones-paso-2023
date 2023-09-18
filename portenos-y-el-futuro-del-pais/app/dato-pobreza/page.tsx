/* eslint-disable @next/next/no-img-element */
import React from 'react';
import NavigationButtons from '../components/NavButtons';
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: `url(/votes-difference-bg.png)`,     transition: 'background-image 0.5s ease-in-out'
  }}>
    <div className="absolute">
        <NavigationButtons prevUrl="/mapaas-caba" nextUrl="/nueva-lider" />
    </div>  
    <div className="w-6/12	mr-2 ml-96 mb-auto mt-2 text-left">    
        <p className="text-black font-montserrat text-lg mb-12 bg-white">
        El dato más elevado de pobreza en hogares se encuentra en la zona sur (<b> 32,6%</b>), donde ubicamos barrios como La Boca, Villa Soldati y Villa Lugano, entre otros. Le sigue zona centro (<b> 19%</b>) y por último zona norte (<b>12,6%</b>) conformada por barrios como Recoleta, Belgrano y Palermo, entre otros.
        </p>
      </div>
  </main>
  )
}
