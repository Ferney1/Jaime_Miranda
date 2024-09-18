
import { Route , Routes} from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import Servicios from "./pages/servicios/Servicios";
import Proyectos from "./pages/proyectos/Proyectos";
import Header from "./components/Principal/Header";
import Blog from "./pages/blog/Blog";
import Formulario from "./pages/Contacto/Formulario";
import NavarDos from "./components/navarDos/NavarDos";
import Foter from "./components/Footer/Foter";


function App() {
  
  return (
    <>
    <div className="relative pb-24 min-h-screen">
       <NavarDos/>

    <Routes>
     <Route path="/" element={<Inicio/>}/> 
     <Route path="/Servicios" element={<Servicios/>}/> 
     <Route path="/Proyectos" element={<Proyectos/>}/> 
     <Route path="/Blog" element={<Blog/>}/> 
     <Route path="/Contacto" element={<Formulario/>}/> 
     <Route path="/Header" element={<Header/>}/> 

     
    </Routes>  
    </div>
    <Foter/>
   
    </>
  );
}

export default App
