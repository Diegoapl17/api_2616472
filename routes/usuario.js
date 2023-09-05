const {Router} = require('express')//desecstructuracion extraer un atributo de un objeto 

const route = Router()

//importar metodos del controlador
const {usuarioGet, usuarioPost, usuarioPut, usuarioDelete} = require('../controllers/usuario')

route.get('/', usuarioGet) //este metodo para listar datos
route.post('/', usuarioPost) //en si hacemos un envio y al final este metodo para insertar datos verificar el metodo
route.put('/', usuarioPut)
route.delete('/', usuarioDelete)

module.exports = route