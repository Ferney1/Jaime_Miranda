import React, { useState } from 'react';
import Slider from 'react-slick'; // Asegúrate de instalar este paquete: npm install react-slick

const Proyectos = () => {
  const [filtro, setFiltro] = useState('*');

  const handleFiltro = (filtro) => {
    setFiltro(filtro);
  };

  const proyectos = [
   
    /* Construccion */
    {
      nombre: 'Trabajo Civil',
      seccion: 'Construcción',
      descripcion: 'Cuidado del Manglar',
      linkImagen: '/assets/Ambiente.jpg',
      linkVideo: 'https://www.youtube.com/playlist?list=PL07bnCMX5KNTX_JWjLZOTo1NikRCmDnGk',
      imagenes: [
        '/assets/construcionUno.svg',
        '/assets/construcionDos.svg',
        '/assets/construcionTres.svg',
        '/assets/construcionCuatro.svg',
      ],
    },


      /* Ambiental */
     {
      nombre: 'Manglares',
      seccion: 'Ambiental',
      descripcion: 'Cuidado del Manglar',
      linkImagen: '/assets/Ambiente.jpg',
      linkVideo: 'https://www.youtube.com/playlist?list=PL07bnCMX5KNTX_JWjLZOTo1NikRCmDnGk',
      imagenes: [
        '/assets/AmbientalUno.svg',
        '/assets/AmbientalDos.svg',
        '/assets/AmbientalTres.svg',
        '/assets/AmbientalCuatro.svg',
      ],
    },

    
      /* Adecuacion de terreno */
      {
        nombre: 'Adecuación de Patio',
        seccion: 'Adecuación Terreno',
        descripcion: 'Cuidado del Manglar',
        linkImagen: '/assets/Ambiente.jpg',
        linkVideo: 'https://www.youtube.com/playlist?list=PL07bnCMX5KNTX_JWjLZOTo1NikRCmDnGk',
        imagenes: [
          '/assets/terrenoUno.svg',
          '/assets/terrenoDos.svg',
          '/assets/terrenoTres.svg',
          '/assets/terrenoCuatro.svg',
          
        ],
      },
  

    
    // Agrega más proyectos aquí con la misma estructura
  ];

  const secciones = [...new Set(proyectos.map((proyecto) => proyecto.seccion))];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="portfolio" className="portfolio bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="section-title text-center mb-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-Menu md:mb-12 lg:text-3xl lg:py-0">
          NUESTROS PROYECTOS
          </h2>
        </div>

        <ul className="flex justify-center mb-8 flex-wrap" id="portfolio-filters">
          <li
            className={`cursor-pointer mr-4 mb-4 font-bold ${
              filtro === '*' ? 'filter-active' : ''
            }`}
            onClick={() => handleFiltro('*')}
          >
            Todo
          </li>
          {secciones.map((seccion) => (
            <li
              key={seccion}
              className={`cursor-pointer mr-4 mb-4 font-bold ${
                filtro === `.${seccion}` ? 'filter-active' : ''
              }`}
              onClick={() => handleFiltro(`.${seccion}`)}
            >
              {seccion.charAt(0).toUpperCase() + seccion.slice(1)}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proyectos.map((proyecto, index) => {
            if (filtro === '*' || filtro === `.${proyecto.seccion}`) {
              return (
                <div key={index} className="portfolio-item filter-app">
                  <Slider {...settings}>
                    {proyecto.imagenes.map((imagen, idx) => (
                      <div key={idx}>
                        <img src={imagen} className="w-full" alt={`Imagen ${idx}`} />
                      </div>
                    ))}
                  </Slider>
                  <div className="portfolio-info bg-white p-4">
                    <h4 className="text-lg font-bold mb-2">{proyecto.nombre}</h4>
                    <p className="text-sm mb-2">{proyecto.descripcion}</p>
                    <a
                      href={proyecto.linkImagen}
                      className="preview-link popup-image mr-2"
                      title="Ver imagen"
                    >
                      <i className="bi bi-plus"></i>
                    </a>
                    <a
                      href={proyecto.linkVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="details-link"
                      title="Ver más"
                    >
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
