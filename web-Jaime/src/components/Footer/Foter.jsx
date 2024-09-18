import React from 'react'

function Foter() {
  return (
    

<footer className="bg-Gris rounded-lg shadow dark:bg-Negro">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://Contraservices.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/logo.png" className="h-8" alt="Contraservice Logo" />
            
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="/" className="hover:underline me-4 md:me-6">Inicio</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Politicas de Privacidad</a>
                </li>
               
                <li>
                    <a href="/contacto" className="hover:underline">Contacto</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://Contraservices.com/" class="hover:underline">Contraservice™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Foter
