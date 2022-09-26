const {model, Schema} = require('mongoose');

const taskSchema = new Schema({
    materia: String,
    tarea: String,
    entrega: String
}, {versionKey: false, timestamps: true})

module.exports = model('task', taskSchema);

