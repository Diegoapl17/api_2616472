const mongoose = require('mongoose');

const dbConnection = async () => {
    //este captura los errores 
    try{
        mongoose.connect(process.env.MONGO_CNN)
        console.log('conexion exitosa a la base de datos')
    }
    catch(error){
        console.log(error)
    }
}


//exportar la cadena de conexion
module.exports = { dbConnection }