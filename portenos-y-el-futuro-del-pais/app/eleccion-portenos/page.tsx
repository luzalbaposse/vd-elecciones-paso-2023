/* eslint-disable @next/next/no-img-element */
import React from 'react';
import NavigationButtons from '../components/NavButtons';
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center" style={{ backgroundImage: `url(/bgeleccion.png)` }}>
    <div className="absolute">
        <NavigationButtons prevUrl="/nueva-fuerza" nextUrl="/cambio-voto" />
    </div>  
      <iframe
        src="https://flo.uri.sh/visualisation/15008114/embed"
        title="Interactive or visual content"
        className="flourish-embed-iframe"
        frameBorder="0"
        scrolling="no"
        style={{ width: '100%', height: '800px', zIndex: 10 }}
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      />
      <div style={{ width: '100%', marginTop: '4px', textAlign: 'right' }}>
        <a
          className="flourish-credit"
          href="https://public.flourish.studio/visualisation/15008114/?utm_source=embed&utm_campaign=visualisation/15008114"
          target="_top"
          style={{ textDecoration: 'none' }}
        >
        </a>
      </div>

  </main>
  )
}
