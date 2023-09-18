import React from 'react';
import NavigationButtons from '../components/NavButtons';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center bg-white relative">
      <div className="absolute z-0">
        <NavigationButtons prevUrl="/nueva-fuerza" nextUrl="/dato-pobreza" />
      </div>

      <div className="flex flex-col items-left justify-center space-y-8 relative z-10">
        <h1 className="text-black font-montserrat text-5xl font-bold mb-6">SUSTITUCIÓN DE VOTOS</h1>
        <div className="flex space-x-2">
          <iframe
            src='https://flo.uri.sh/visualisation/15049365/embed'
            title='Interactive or visual content'
            className='flourish-embed-iframe'
            frameBorder={0}
            scrolling='no'
            style={{ width: '600px', height: '700px' }} 
            sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
          ></iframe>
          <iframe
            src='https://flo.uri.sh/visualisation/15049064/embed'
            title='Interactive or visual content'
            className='flourish-embed-iframe'
            frameBorder={0}
            scrolling='no'
            style={{ width: '600px', height: '700px' }} 
            sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'
          ></iframe>
        </div>
      </div>
    </main>
  )
}
