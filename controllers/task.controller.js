const Ctrl = {};
const task = require('../models/task')

Ctrl.getTask = async (req, res)=>{
    const tasks = await task.find();

    res.json(tasks);
}

Ctrl.postTask = async (req, res)=>{
    const {materia, tarea, entrega} = req.body;

    const newTask = new task({
        materia,
        tarea,
        entrega
    })

    const saveNewTask = await newTask.save();

    res.json(saveNewTask);
}

Ctrl.putTask = async (req, res)=>{
    const {id, materia, tarea, entrega} = req.body;

    const updateTask = await task.updateOne({_id: id},
        {$set: {
            materia,
            tarea,
            entrega }
        });

    res.json(updateTask);
}

Ctrl.deleteTask = async (req, res)=>{
    const {id} = req.body;

    const deleteTask = await task.deleteOne({_id: id});

    res.json(deleteTask);
}

module.exports = Ctrl;