/* eslint-disable @next/next/no-img-element */
import React from 'react';

const NavigationButtons = ({ prevUrl, nextUrl }) => {
  return (
    <div className="flex justify-between w-15 py-6 px-6 fixed top-0 left-0 right-0 bottom-0 mx-auto">
      <div className="flex items-center justify-start w-1/2">
        <a href={prevUrl}>
          <img src="/boton_izquierda.svg" alt="Botón Izquierda" className="w-8 h-8 text-gray-500 hover:text-black transition-colors duration-300" />
        </a>
      </div>
      <div className="flex items-center justify-end w-1/2">
        <a href={nextUrl}>
          <img src="/boton_derecha.svg" alt="Botón Derecha" className="w-8 h-8 text-gray-500 hover:text-black transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
}

export default NavigationButtons;
