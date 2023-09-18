/* eslint-disable @next/next/no-img-element */
import React from 'react';
import NavigationButtons from '../components/NavButtons';
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: `url(/UxP.png)`,     transition: 'background-image 0.5s ease-in-out'
  }}>
    <div className="absolute">
        <NavigationButtons prevUrl="/milei" nextUrl="/milei-vs-patricia" />
    </div>  
    <div className="flex flex-col items-end mt-0 ml-auto mr-0 z-10">
    <div className="text-right mb-2">
    <h1 className="text-black tracking-widest font-montserrat text-4xl font-normal mb-2">
      LOS QUE PERDIERON
    </h1>
    <h1 className="text-black font-montserrat text-7xl font-bold mb-2">
      EL SUR
    </h1>
  </div>
  <p className="text-black font-montserrat text-lg text-right mb-12 w-1/3">
    La Capital siempre estuvo pintada de amarillo, salvo por el sur: en los barrios más humildes, Unión por la Patria solía imponerse. <br />
    Sin embargo, en esta elección, fueron desplazados por el de la melena.
  </p>
</div>
  </main>
  )
}
