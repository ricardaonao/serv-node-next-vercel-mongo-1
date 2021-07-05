//Schema modelo
const mongoose = require('mongoose');


const DadosSchema = new mongoose.Schema({
    
    cep: {
        type: String,
        required: [true, 'Dado origatório'],
        unique: true,
        trim: true,
        maxlenght: [9, 'Opa. Número de caracreres excedido']
    },
    localidade: {
        type: String,
        required: true,
        maxlenght: [20, 'Opa.Número de caracreres excedido']
    }

})



module.exports = mongoose.models.Dados || mongoose.model('Dados', DadosSchema);