const {response} = require('express');
const productos = require('../models/productos');

//importacion de los metodos 
const Usuario = require('../models/productos');


//metodo GET de la api
//consultar para obtener los usuarios en una variable de tipo asincrona 
const productoGet  = async (req, res) => {
    // const {nombre} = req.query//desecstructuracion

  
    //consultar todos los uduarios
    const productos = await Producto.find(); //esto nos da una respuesta

    //convierte los usuarios en json 
    res.json({
        productos
    })
}


//-----------------------------------------------esto es una consulta en node-------------------------------------

//metodo POST de la api
//siempre que hay un metodo async hay un await
//Método POST de la api
const usuarioPost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.query //Captura de atributos
    try {
        const usuario = new Usuario(body) //Instanciando el objeto
        await usuario.save() //Inserta en la colección
    } catch (error) {
        mensaje = error
        console.log(error)
    }
        res.json({
        msg: mensaje
    })
}

//Modifcación
const usuarioPut = async(req, res) => {

    const {nombre, password, rol, estado} = req.query
    let mensaje = 'Modificación exitosa'
    try{
         await Usuario.updateMany({nombre: nombre}, 
            {$set: {password: password, rol:rol, estado:estado}});
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}



const usuarioDelete = async (req, res ) => {
    const {_id} = req.query
    let mensaje = 'La eliminacion se efectuo con exito'

    try {
        const usuario = await Usuario.deleteOne({_id: _id})
    }catch(error) {
        mensaje = 'Se presentaron problemas en la eliminacion'
    }

    res.json({
        msg: mensaje
    })
}




//si defino el metodo post tengo que enrutarlo igual que el get 
module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}





