/* eslint-disable @next/next/no-img-element */
import React from 'react';
import NavigationButtons from '../components/NavButtons';
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: `url(/votes-difference-bg.png)` }}>
    <div className="absolute">
        <NavigationButtons prevUrl="/eleccion-portenos" nextUrl="/nueva-lider" />
    </div>  
    <div className="flex space-x-7 mr-56 ml-auto mb-auto mt-12 text-left">    
        <p className="text-black font-montserrat text-lg mb-12 max-w-md">
        El dato más elevado de pobreza en hogares se encuentra en la zona sur (32,6%), donde ubicamos barrios como La Boca, Villa Soldati y Villa Lugano, entre otros. Le sigue zona centro (19%) y por último zona norte (12,6%) conformada por barrios como Recoleta, Belgrano y Palermo, entre otros.
        </p>
      </div>

  </main>
  )
}
