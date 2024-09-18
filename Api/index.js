const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv").config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001 

// coneccion a base de datos 
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
});

// Metodo guardar 

app.post("/create", (req, res) => {
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const correo = req.body.correo;
  const telefono = req.body.telefono;
  const ciudad = req.body.ciudad;
  const mensaje = req.body.mensaje;


  db.query(
    'INSERT INTO usuario(nombre,apellido,correo,telefono,ciudad,mensaje) VALUES(?,?,?,?,?,?)',
    [nombre,apellido,correo,telefono,ciudad,mensaje],

    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Usuario Registrado...")
        }

    }
  );
});


app. listen (PORT, ( )=>{      

    console.log("Corriendo en el puerto" + PORT);
})