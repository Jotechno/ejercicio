const {Schema, model} = require ('mongoose')

const UsuarioSchema = Schema ({
    NroAmbiente:{ 
        type: Number,
        required: [true, 'El campo NroAmbiente es requerido'],
        enum: [701, 702, 703, 704, 705, 801, 802, 803, 804, 805]
    },

    Fecha: {
        type: String,
        required: [true, 'La Fecha es requerida']
    },

    Hora:{
        type: String,
        required: true,
        required: [true, 'La Hora es requerida']
    },

    Temperatura:{
        type: Number,
        required: true,
        required: [true, 'La Temperatura es requerida'],
        min: [-5, 'La temperatura mínima permitida es -5'],
        max: [50, 'La temperatura máxima permitida es 50']
    },

    NombreUsuario:{
        type: String,
        required: true,
        required: [true, 'El NombreUsuario es requerido']
    },

})

module.exports = model('Usuario', UsuarioSchema); //Exportar el modelo