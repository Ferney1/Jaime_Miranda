import React, { useState, useEffect } from 'react';

function Clientes() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Ejemplo de URLs de imágenes para el carrusel
    const urls = [
      '/assets/astivik.svg',
      '/assets/Ponal.svg',
      '/assets/Alcaldia.svg',
      '/assets/Geoambiental.svg',
      '/assets/serenadelmar.svg',
      '/assets/Armada.svg',
    ];
    setImageUrls(urls);
  }, []);

  return (
    <div className="carousel-container relative w-full overflow-hidden flex flex-col items-center justify-center">
      <h2 className="mb-4 text-center text-2xl font-bold text-Menu md:mb-6 lg:text-3xl lg:py-0">
        NUESTROS CLIENTES
      </h2>
      <ul className="brands-wrapper flex flex-wrap justify-center items-center">
        {imageUrls.map((url, index) => (
          <li key={index} className="flex-shrink-0 mb-4 mx-2 md:mx-4">
            <img
              src={url}
              alt={`Brand ${index + 1}`}
              className="w-40 md:w-48 lg:w-60 h-auto object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clientes;

















