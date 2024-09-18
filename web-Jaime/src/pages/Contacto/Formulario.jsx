import { useState } from "react";
import Axios from "axios";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [mensaje, setMensaje] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (
      validarNombre(nombre) &&
      validarApellido(apellido) &&
      validarCorreo(correo) &&
      validarTelefono(telefono)
    ) {
      Axios.post(import.meta.env.VITE_URL_API + '/create', {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        telefono: telefono,
        ciudad: ciudad,
        mensaje: mensaje,
      }).then(() => {
        alert("Se mandaron con éxito tus datos...");
        resetForm();
      });
    } else {
      alert("Por favor, completa correctamente todos los campos.");
    }
  };

  const validarNombre = (nombre) => /^[a-zA-Z\s]*$/.test(nombre);
  const validarApellido = (apellido) => /^[a-zA-Z\s]*$/.test(apellido);
  const validarCorreo = (correo) => /\S+@\S+\.\S+/.test(correo);
  const validarTelefono = (telefono) => /^\d{10}$/.test(telefono);

  const resetForm = () => {
    setNombre("");
    setApellido("");
    setCorreo("");
    setTelefono("");
    setCiudad("");
    setMensaje("");
  };

  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <div className="relative w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl px-4">
          <div className="relative w-full rounded-3xl px-6 py-4 bg-white shadow-md">
            <label className="block mt-3 text-xl text-black text-center font-bold">
              Contacto
            </label>
            <form onSubmit={add} className="mt-10 space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nombres"
                  value={nombre}
                  onChange={(event) => setNombre(event.target.value)}
                  className="mt-1 block w-full bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Apellidos"
                  value={apellido}
                  onChange={(event) => setApellido(event.target.value)}
                  className="mt-1 block w-full bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  value={correo}
                  onChange={(event) => setCorreo(event.target.value)}
                  className="mt-1 block w-full bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Celular"
                  value={telefono}
                  onChange={(event) => setTelefono(event.target.value)}
                  className="mt-1 block w-full bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Ciudad"
                  value={ciudad}
                  onChange={(event) => setCiudad(event.target.value)}
                  className="mt-1 block w-full bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div>
                <textarea
                  placeholder="Mensaje"
                  value={mensaje}
                  onChange={(event) => setMensaje(event.target.value)}
                  className="mt-1 block w-full bg-gray-100 h-24 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7 flex justify-center">
                <button
                  type="submit"
                  className="bg-Primario text-white py-2 px-4 rounded-xl shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulario;


