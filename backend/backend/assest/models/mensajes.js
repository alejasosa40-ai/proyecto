const mongoose = require("mongoose");

/*
const UsuarioSchema = new mongoose.Schema({
    cedula: String,
    userName: String,
    nombre: String,
    apellido: String,
    correo: String,
    password: String,
    telefono: int
},{collection: "usuarios"});

*/

const MensajeSchemas = new mongoose.Schema({
    mensaje:String
},{collection:"mensajes"});
    mongoose.model("mensajes",MensajeSchemas)

