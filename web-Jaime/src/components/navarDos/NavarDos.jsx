import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavarDos() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`bg-Gris dark:bg-Gris border-Negro ${
          isFixed ? 'fixed top-0 left-0 right-0 z-50' : ''
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://contraservices.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo.png"
              className="h-8"
              alt="Contraservice"
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${
              isOpen
                ? 'bg-gray-100 dark:bg-gray-700'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isOpen ? 'block' : 'hidden'
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-Gris rounded-lg bg-Gris md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-Gris dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4  bg-Secudario rounded md:bg-transparent md:text-Secudario md:p-0 dark:text-Gris md:dark:text-Secudario"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/Servicios"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-Gris md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-Gris md:dark:hover:bg-transparent"
                >
                  Servicio
                </Link>
              </li>
              <li>
                <Link
                  to="/Proyectos"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-Gris md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-Gris md:dark:hover:bg-transparent"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  to="/Blog"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-Gris md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-Gris md:dark:hover:bg-transparent"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/Contacto"
                  className="hidden md:block py-2 pl-3 pr-4 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-Gris md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-Gris md:dark:hover:bg-transparent"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavarDos;
