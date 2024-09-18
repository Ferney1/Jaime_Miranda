import React from 'react';

function Ubicacion() {
  return (
    <section className="bg-white dark:bg-Gris">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <h1 className="mb-8 text-center text-2xl font-bold text-Menu md:mb-12 lg:text-3xl lg:py-[-1%]">
            COMUNÍCATE CON NOSOTROS
          </h1>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.3600000273427!2d-75.48432272598791!3d10.392955266151903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625cb40094d05%3A0x34b6e387b7c9b762!2sMulticentro%20El%20Amparo!5e0!3m2!1ses-419!2sco!4v1717816556987!5m2!1ses-419!2sco"
          width="800"
          height="500"
          style={{
            border: 0,
            width: '100%',
            height: '400px',
            borderRadius: '8px',
            marginTop: '2.5rem',
            transition: 'all 0.3s',
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="hover:scale-110 hover:shadow-lg"
        ></iframe>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2">
          <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-Negro">
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-Primario dark:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-base font-medium text-Menu dark:text-white">EMAIL</h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">¿Que deseas saber?</p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">Info@contraservices.com</p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-Negro">
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-Primario dark:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-base font-medium text-Menu dark:text-white">UBICACÍON</h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Cartagena- Bolivar</p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
              Edificio Multicentro el Amparo-Oficina 4B3 Diagonal 31 T54
            </p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-Negro ">
            <span className="inline-block p-3 text-blue-500 rounded-lg bg-Primario dark:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-base font-medium text-Menu dark:text-white">CONTACTO</h2>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Horario de lunes a Viernes 8 am a 6 pm.
            </p>
            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">(605)6523738</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ubicacion;
