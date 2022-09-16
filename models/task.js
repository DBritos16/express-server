const {model, Schema} = require('mongoose');

const taskSchema = new Schema({
    materia: String,
    tarea: String,
    entrega: String
}, {versionKey: false})

module.exports = model('task', taskSchema);