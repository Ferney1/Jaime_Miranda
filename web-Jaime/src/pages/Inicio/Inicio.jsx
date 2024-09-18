import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from '../../components/Cards/Cards';
import Personal from '../../components/EquipoTrabajo/Personal';
import SliderCustom from '../../components/SliderCustom/SliderCustom'
import Estadisticas from '../../components/Estadistica/Estadistica';
import Clientes from '../../components/clientes/Clientes';
import BotonContacto from '../../components/bootonContacto/BotonContacto';
import Ubicacion from '../../components/ubicacion/Ubicacion';








const Inicio = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const images = [
   
    {
      src: '/assets/Equipo_trabajo.svg',
      alt: 'Slider 1'
    },
    {
      src: '/assets/otra.svg',
      alt: 'Slider 2'
    },
    
  ]

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Carrusel de Imágenes */}
      <SliderCustom images={images} />

   
      <div className="mt-0">
        <BotonContacto />
      </div>

     
      <div className="mt-0">
        <Cards />
      </div>

      <div className="mt-[-5%]">
        <Personal />
      </div>

      <div className="mt-[0%]">
        <Estadisticas />
      </div>

      <div className="mt-[0%]">
        <Ubicacion />
      </div>

      <div className="mt-[0%]">
        <Clientes />
      </div>

    
    </div>
  );
};

export default Inicio;







