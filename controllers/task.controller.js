const Ctrl = {};
const task = require('../models/task')

Ctrl.getTask = async (req, res)=>{
    const tasks = await task.find();

    res.render('index', {tasks});
}

Ctrl.postTask = async (req, res)=>{
    const {materia, tarea, entrega} = req.body;

    const newTask = new task({
        materia,
        tarea,
        entrega
    })

    await newTask.save();
    
    res.json();
    /* res.redirect('./task'); */
}

Ctrl.putTask = async (req, res)=>{
    const id = req.params.id
    const {materia, tarea, entrega} = req.body;

    await task.updateOne({_id: id},
        {$set: {
            materia,
            tarea,
            entrega }
        });

    res.status(200).json();
}

Ctrl.deleteTask = async (req, res)=>{
    const id = req.params.id;

    await task.deleteOne({_id: id});

    res.status(200).json();
}

module.exports = Ctrl;