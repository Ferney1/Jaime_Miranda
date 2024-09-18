import React from 'react';

function Cards() {
    return (
        <section className="bg-white dark:bg-Negro">
            <div className="container px-6 py-10 mx-auto">
                <h2 className="mb-8 text-center text-2xl font-bold text-Menu md:mb-12 lg:text-3xl lg:py-6">
                    ¿POR QUÉ NOSOTROS?
                </h2>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    <Card
                        title="¿Quiénes somos?"
                        description="Nuestra empresa nace como fruto del esfuerzo y la visión de profesionales destacados en las 
                        áreas de la Asesorías, construcción, servicios e ingeniería, conformando un equipo que da vida de una 
                        forma ordenada y planificada a los diferentes proyectos y Servicios."
                    />
                    <Card
                        title="Misión"
                        description="Empresa especializada en construcción, pintura, mantenimiento, servicios y suministros, garantizando un excelente servicio, calidad y efectividad a nuestros clientes. Innovamos en el mercado con una amplia gama de productos y servicios. Nos dedicamos a la ejecución y desarrollo de proyectos en diversas ramas de la ingeniería, enfocados en seguridad, calidad, tecnología y eficiencia. Contamos con un talento humano capacitado y con experiencia para brindar satisfacción a nuestros clientes y mantenernos altamente competitivos en el entorno empresarial."
                    />
                    <Card
                        title="Visión"
                        description="Somos una empresa nacional comprometida con el más alto nivel de servicio al cliente, basada en la confianza 
                        y credibilidad de nuestro trabajo. Nuestros valores incluyen puntualidad, responsabilidad, compromiso, confianza, honestidad 
                        y respeto. Contamos con un equipo de trabajo con experiencia en construcción, electricidad, pintura, estucos, drywall, 
                        mantenimiento de maquinaria, carpintería, estructuras metálicas y paneles para bodegas. Nuestra responsabilidad empresarial 
                        está enfocada en trabajar de la mano con el cliente."
                    />
                </div>
            </div>
        </section>
    );
}

function Card({ icon, title, description }) {
    return (
        <div className="p-8 space-y-3 border-2 border-Menu dark:border-blue-300 rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <span className="inline-block text-Menu dark:text-Menu">{icon}</span>
            <h1 className="text-xl font-bold text-Menu capitalize dark:text-white">{title}</h1>
            <p className="text-gray-500 dark:text-gray-300">{description}</p>
        </div>
    );
}

export default Cards;
