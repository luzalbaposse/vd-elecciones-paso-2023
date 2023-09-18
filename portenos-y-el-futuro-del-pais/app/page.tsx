import React from 'react';
import NavigationButtons from '../app/components/NavButtons'
export default function Home() {

  return (
    <main className="flex min-h-screen max-h-screen flex-col items-center justify-center p-24 bg-cover bg-center bg-white" style={{ backgroundImage: `url(bgimage.png)` }}>
  <div className="flex justify-between w-15 py-3 px-6 fixed top-2 left-0 right-0">
      <div className="text-black font-montserrat text-lg font-normal mb-2 px-6">Visualización de Datos</div>
      <div className="text-black font-montserrat text-lg font-normal mb-2">S2</div>
      <div className="text-black font-montserrat text-lg font-normal mb-2">Luz Alba Posse</div>
      <div className="text-black font-montserrat text-lg font-normal mb-2 px-6 bg-white">Lucía Lopez</div>
    </div>
    <div className="absolute z-0">
        <NavigationButtons prevUrl="/" nextUrl="/nueva-fuerza" />
      </div>  
      <div className="text-center mb-12 space-y-0 z-10">
      <h1 className="text-black font-montserrat text-9xl font-bold bg-white">PORTEÑOS</h1>
      <h2 className="text-black font-montserrat text-5xl font-normal leading-normal mb-12 tracking-widest bg-white">Y EL FUTURO DEL PAÍS</h2>
    </div>
  </main>
  )
}
