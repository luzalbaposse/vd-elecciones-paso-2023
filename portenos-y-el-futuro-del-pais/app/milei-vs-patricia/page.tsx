/* eslint-disable @next/next/no-img-element */
import React from 'react';
import NavigationButtons from '../components/NavButtons';
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center bg-white" style={{ backgroundImage: `url(/milei-vs-bullrich.png)` }}>
    <div className="absolute">
        <NavigationButtons prevUrl="/milei" nextUrl="/milei-vs-patricia" />
    </div>  
    <div className="flex flex-col items-center">
    <div className="text-center mb-2">
    <h1 className="text-black  tracking-widest font-montserrat text-4xl font-normal mb-2">
      LA ELECCIÓN DE OCTUBRE
    </h1>
    <h1 className="text-black font-montserrat text-8xl font-bold mb-2">
      EN DISPUTA
    </h1>
  </div>
</div>
  </main>
  )
}