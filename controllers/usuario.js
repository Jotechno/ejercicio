const {response} = require('express')

//Importar modelos
const Usuario = require('../models/usuario')


const usuarioGet = async (req, res = response) => {
   
    const usuarios = await Usuario.find()

    res.json({
        usuarios
    })
}   

const usuarioPost = async (req, res = response) => {
    const body = req.query //CAptura dde atributos
    const usuario = new Usuario(body)
    usuario.save()

    res.json({
        msg: 'Exito en la inserción'
    })
}

const usuarioPut = async (req, res = response) => {
    const {NombreUsuario, NroAmbiente, Fecha, Temperatura, Hora} = req.query//modificar
   
    let mensaje = ""


    try {
        const usuario = await Usuario.findOneAndUpdate({NombreUsuario: NombreUsuario},{Temperatura:Temperatura, NroAmbiente:NroAmbiente})//Primera llave es el nombre del atributo, el segundo es el nuevo atributo
        mensaje = "Modificado"
    } catch (error) {
        mensaje = "No modificado"
    }
    res.json({
        msg: mensaje
    })
}

const usuarioDelete = async (req, res = response) => {
    const {NombreUsuario, NroAmbiente, Fecha, Temperatura, Hora} = req.query//modificar
   
    let mensaje = ""


    try {
        const usuario = await Usuario.findOneAndDelete({NombreUsuario: NombreUsuario})//Primera llave es el nombre del atributo, el segundo es el nuevo atributo
        mensaje = "Borrado"
    } catch (error) {
        mensaje = "No borrado"
    }
    res.json({
        msg: mensaje
    })
}

module.exports ={
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}