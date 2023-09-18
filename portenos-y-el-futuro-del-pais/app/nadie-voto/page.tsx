/* eslint-disable @next/next/no-img-element */
import React from 'react';
import NavigationButtons from '../components/NavButtons';
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: `url(/nadie-bg.png)` }}>
    <div className="absolute">
        <NavigationButtons prevUrl="/nueva-lider" nextUrl="/votos-en-blanco" />
    </div>  
  <div className="flex flex-col items-start mt-12 ml-36 mr-auto">
  <h1 className="text-black text-right font-montserrat text-4xl font-light tracking-widest	mb-2">
      ELEGIR A
    </h1>
    <h1 className="text-black text-right font-montserrat text-8xl font-bold mb-2">
      NADIE
    </h1>

  <p className="text-black text-left font-montserrat text-lg mb-12 w-1/3">
  A nivel nacional, más de un millón de personas no eligieron a un candidato.
  </p>
  <p className="text-black text-left font-montserrat text-lg mb-12 w-1/3">
  De cierta forma, el rechazo a la oferta electoral que se presentó a las últimas PASO, reunió casi 400.000 votos más que en 2019.  </p>
  <p className="text-black text-left font-montserrat text-lg mb-12 w-1/3">
  El <b>4,78%</b> del electorado eligió el voto en blanco de las internas abiertas.
  </p>

</div>
  </main>
  )
}
