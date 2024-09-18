import { Link } from "react-router-dom";

function BotonContacto() {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mx-auto flex max-w-xl flex-col items-center text-center">
          <h1 class="mb-8 text-3xl font-bold text-Menu sm:text-4xl md:mb-12 md:text-4xl">
          Construcciones integrales
          </h1>

          <Link
            to="/Contacto"
            className="inline-block rounded-lg bg-Primario px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-Secudario transition duration-100 hover:bg-Secudario focus-visible:ring active:bg-indigo-700 md:text-base"
          >
           OBTENER COTIZACÍON
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BotonContacto;
