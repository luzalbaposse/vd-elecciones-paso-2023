/* eslint-disable @next/next/no-img-element */
import React from 'react';
import NavigationButtons from '../components/NavButtons';
export default function Home() {

  return (
    <main className="flex max-h-screen min-h-screen flex-col items-center justify-center p-24 bg-white bg-cover bg-center" style={{ backgroundImage: `url(/milei-bg.png)`,     transition: 'background-image 0.5s ease-in-out'
  }}>
    <div className="absolute">
        <NavigationButtons prevUrl="/jxc" nextUrl="/uxp" />
    </div>  
    <div className="flex flex-col items-end mt-0 ml-auto mr-0 z-10">
    <div className="text-right mb-2">
    <h1 className="text-black tracking-widest font-montserrat text-4xl font-normal mb-2">
      HABLEMOS DE LA
    </h1>
    <h1 className="text-black font-montserrat text-7xl font-bold mb-2">
      SORPRESA
    </h1>
  </div>
  <p className="text-black font-montserrat text-lg text-right mb-12 w-1/3">
  El caudal de votos lo coloca como protagonista de un balotaje si ninguno de los candidatos alcanza el 45% de apoyo -o más del 40% con diez puntos de ventaja respecto al segundo- en las elecciones generales del 22 de octubre.
  
  </p>
</div>
  </main>
  )
}
