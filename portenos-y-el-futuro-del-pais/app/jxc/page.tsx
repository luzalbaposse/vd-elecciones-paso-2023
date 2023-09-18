/* eslint-disable @next/next/no-img-element */
import React from 'react';
import NavigationButtons from '../components/NavButtons';
export default function Home() {

  return (
    <main className="flex max-h-screen min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: `url(/jxcbg.png)` }}>
    <div className="absolute z-0">
        <NavigationButtons prevUrl="/votos-en-blanco" nextUrl="/milei" />
    </div>  
    <div className="flex flex-col items-end mt-0 ml-auto mr-0 z-10">
    <div className="text-right mb-2">
    <h1 className="text-black tracking-widest font-montserrat text-4xl font-normal mb-2">
      ALGUNAS
    </h1>
    <h1 className="text-black font-montserrat text-7xl font-bold mb-2">
      CLAVES
    </h1>
  </div>
  <p className="text-black font-montserrat text-lg text-right mb-12 w-1/4">
    Hay una nueva líder en JxC: <br /> <b>Patricia Bullrich.</b> <br />  
    En el espacio se terminó eligiendo un modelo de país que se aleja de la moderación y se acerca a un centro más hacia la derecha. <br />  
  </p>
</div>
  </main>
  )
}
