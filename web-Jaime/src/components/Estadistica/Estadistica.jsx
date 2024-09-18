import React from 'react'

function Estadistica() {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-Menu sm:text-4xl md:mx-auto text-center">
          <span className="relative inline-block">
            <span className="relative"> Nuestros Proyectos</span>
          </span>{" "}
        </h2>
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
      
        
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl"> +20</h6>
          <p class="text-sm font-medium tracking-widest text-Primario uppercase lg:text-base">
          PROYECTOS REALIZADOS
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">+100</h6>
          <p class="text-sm font-medium tracking-widest text-Primario uppercase lg:text-base">
          CLIENTES SATISFECHOS
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">50</h6>
          <p class="text-sm font-medium tracking-widest text-Primario uppercase lg:text-base">
          COLABORADORES
          </p>
        </div>
        
        <div class="text-center">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">200</h6>
          <p class="text-sm font-medium tracking-widest text-Primario uppercase lg:text-base">
          Empleos Generados
          </p>
        </div>
      </div>
    </div>
  )
}

export default Estadistica