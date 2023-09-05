const {Schema, model} = require('mongoose')

const UsuarioSchema = ({
    nombre:{
        type: String,
        unique:true,
        required:[true, 'El nombre es obligatorio']
    },
    password:{
        type: String,
        unique:[true,'la contraseña es obligatoria'],
        minlenght:[3, 'Debe tener minimo 3 caracteres'],
        //maslenght:[7, 'Debe tener maximo 3 caracteres'] 
    },
    rol:{
        type:String,
        required :true,
        enum:['Admin','Usuario']
    },
    estado:{
        type: Boolean,
        default:true,
        enum:[true, 'El estado es obligatorio']
    },
})

//Exportar la funcion  UsuariosSchema
module.exports = model ('Usuario',UsuarioSchema)