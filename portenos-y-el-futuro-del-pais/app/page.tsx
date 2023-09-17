import React from 'react';
import NavigationButtons from '../app/components/NavButtons'
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[length:1920px_1080px] bg-[url('../public/bgimage.png')]">
<div className="flex justify-between w-15 py-6 px-6 bg-white fixed top-0 left-0 right-0">
      <div className="text-black font-montserrat text-lg font-normal mb-2 px-6">Visualización de Datos</div>
      <div className="text-black font-montserrat text-lg font-normal mb-2">S2</div>
      <div className="text-black font-montserrat text-lg font-normal mb-2">Luz Alba Posse</div>
      <div className="text-black font-montserrat text-lg font-normal mb-2 px-6">Lucía Lopez</div>
    </div>
    <div className="absolute">
        <NavigationButtons prevUrl="/" nextUrl="/nueva-fuerza" />
      </div>  
      <div className="text-center mb-12">
      <h1 className="text-black font-montserrat text-9xl font-bold mb-6">PORTEÑOS</h1>
      <h2 className="text-black font-montserrat text-5xl font-normal leading-normal tracking-widest mb-12">Y EL FUTURO DEL PAÍS</h2>
    </div>


  </main>
  )
}
