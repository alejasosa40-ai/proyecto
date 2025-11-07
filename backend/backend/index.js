const express = require("express");
const cors = require("cors");
const mongose = require("mongoose");
const axios = require("axios");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = 5000;

app.listen(PORT, function () {
    console.log("CONECTANDO AL PUERTO" + PORT);
});

const bbdd = "app-futuro";

const url = "mongodb+srv://zacpoolgames_db_user:dgAero2j5LIVsjsm@cluster0.0p4libg.mongodb.net/"+bbdd+"?retryWrites=true&w=majority&appName=Cluster0";


const connection = mongoose.connect(url);

connection.then(function () {
    console.log("CONECTADO A LA BASE DE DATOS");
}).catch(function (error) {  
    console.log("Error en la conexion" + error);
});

require("./assest/models/mensajes.js")

const Mensajes = mongoose.model("mensajes");


app.post("/subir",function(req,res)
{
    const mensaje = req.body.mensaje;

    try {
        Mensajes.create(mensaje);

        res.send({
            status: true,
            message: "Mensaje enviado"
        })
     }

    catch {error} {
       

        res.send({
            status: false,
            menssage: "No se logro enviar el mensaje",
            error:error.message

    })
}});

app.get("/recibir", async function (req, res) {

    try {

        const mensajes = await mensajes.find({});

        res.send({
            status: true,
            message: "mensajes recibidos correctamente",
            datos: mensajes

        })
    }

    catch (error) {

        res.send({
            status: false,
            menssage: "No se logro enviar el mensaje",
            error: error.message

        })
       } 
    });
