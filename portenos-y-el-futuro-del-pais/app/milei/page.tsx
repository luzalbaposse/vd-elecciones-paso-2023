/* eslint-disable @next/next/no-img-element */
import React from 'react';
import NavigationButtons from '../components/NavButtons';
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: `url(/milei-bg.png)` }}>
    <div className="absolute">
        <NavigationButtons prevUrl="/jxc" nextUrl="/uxp" />
    </div>  
    <div className="flex flex-col items-start mt-12 ml-auto mr-56">
    <div className="text-left mb-2">
    <h1 className="text-black font-montserrat text-4xl font-normal mb-2">
      LOREM
    </h1>
    <h1 className="text-black font-montserrat text-7xl font-bold mb-2">
      IPSUM
    </h1>
  </div>
  <p className="text-black font-montserrat text-lg mb-12 max-w-md">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquet, nunc nisl ultricies nunc, eget aliquam nisl nis.
  </p>
  <p className="text-black font-montserrat text-lg mb-12 max-w-md">
    👉 Cosa 1 <br />
    👉 Cosa 2 <br />
    👉 Cosa 3 <br />
  </p>
</div>
  </main>
  )
}
