const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    nombre: String,
    edad: Number,
    pais: String
}, {versionKey: false})

module.exports = model('users', userSchema)

