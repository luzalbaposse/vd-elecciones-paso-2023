/* eslint-disable @next/next/no-img-element */
import React from 'react';
import NavigationButtons from '../components/NavButtons';

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-center p-24 bg-cover bg-white bg-center" style={{ backgroundImage: `url(/blanco-bg.png)`,     transition: 'background-image 0.5s ease-in-out'
  }}>
      <div className="absolute">
        <NavigationButtons prevUrl="/nadie-voto" nextUrl="/jxc" />
      </div>  
      <iframe
        src='https://flo.uri.sh/visualisation/15007485/embed'
        title='Interactive or visual content'
        className='flourish-embed-iframe'
        frameBorder='0'
        scrolling='no'
        style={{ width: '100%', height: '600px', zIndex: 10, background: 'transparent'}}
        sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
      ></iframe>
      
      <div className="flex flex-col items-start mt-auto ml-56 mr-auto">
        <div className="text-left mb-2">
          <h1 className="text-black font-montserrat text-2xl font-normal mb-2 tracking-widest bg-white">
            UNA DE CADA
          </h1>
          <h1 className="text-black font-montserrat text-5xl font-bold mb-2 bg-white">
            SESENTA PERSONAS
          </h1>
          <h1 className="text-black font-montserrat text-5xl font-bold mb-2 bg-white">
            VOTÓ EN BLANCO
          </h1>
        </div>
      </div>
    </main>
  )
}
