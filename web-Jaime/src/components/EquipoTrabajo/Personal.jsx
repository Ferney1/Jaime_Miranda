import React from "react";

function Personal() {
  return (
    <div className="py-6 sm:py-8 lg:py-20">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-Menu md:mb-12 lg:text-3xl lg:py-6">
          Nuestro Equipo de Trabajo
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          <div>
            <a
              href="#"
              className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
            >
              <img
                src="/assets/Jaime.svg"
                loading="lazy"
                alt="Photo by Austin Wade"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                <span className="text-gray-500">Gerente General</span>
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Jaime Miranda
                </span>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
            >
              <img
                src="/assets/secretaria.svg"
                loading="lazy"
                alt="Photo by Austin Wade"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                <span className="text-gray-500">Gerente Administrativa</span>
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Yuranis Taborda{" "}
                </span>
              </div>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
            >
              <img
                src="/assets/Mauricio.svg"
                loading="lazy"
                alt="Photo by engin akyurt"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                <span className="text-gray-500">Gerente Comercial</span>
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Mauricio Pedroza{" "}
                </span>
              </div>
            </a>
          </div>

          <div>
            <a
              href="#"
              className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
            >
              <img
                src="/assets/Secretario.svg"
                loading="lazy"
                alt="Photo by Austin Wade"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                <span className="text-gray-500">Gerente Financiero</span>
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Ricardo Ortega
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
