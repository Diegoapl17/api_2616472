require('dotenv').config()//importar paquete 
const Server = require('./models/server')

const server = new Server()//instanciar el objeto

server.listen()//escuchar las peticiones del servidor para saber si funciona Servidor local iniciarlo