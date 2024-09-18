import React from 'react'
import { Link } from "react-router-dom";

function Servicios() {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-8 text-center text-2xl font-bold text-Menu md:mb-12 lg:text-3xl lg:py-6">NUESTROS SERVICIOS</h2>
            <Link
              to="/Contacto"
              className="inline-block rounded-lg bg-Primario px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-Secudario transition duration-100 hover:bg-Secudario focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Reserva una Llamada
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {[
              {
                src: "/assets/MovimientosAdecuacionesTerrenos.svg",
                title: "Movimientos de Tierra"
              },
              {
                src: "/assets/ObrasCivil.svg",
                title: "Construcción Obras Civiles",
                alt: "Trabajo de obras civiles"
              },
              {
                src: "/assets/RellenoConformaciónPatiosConcesion.svg",
                title: "Proyectos Rurales"
              },
              {
                src: "/assets/alcantarillado.svg",
                title: "Soluciones de Alcantarillado",
                alt: "Alcantarillado"
              },
              {
                src: "/assets/AmbientalDos.svg",
                title: "Ambiental",
                alt: "Photo by Elizeu Dias"
              },
              {
                src: "/assets/terrenoUno.svg",
                title: "Adecuación de Terreno",
                alt: "Photo by Matheus Ferrero"
              }
            ].map((item, index) => (
              <div key={index}>
                <div className="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80 transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                  <img src={item.src} loading="lazy" alt={item.alt || item.title} className="h-full w-full object-cover object-center" />
                </div>
                <div>
                  <div className="font-bold text-Menu md:text-lg">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicios;
