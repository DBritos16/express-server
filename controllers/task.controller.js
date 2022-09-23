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
    
    res.redirect('./task');
}

Ctrl.putTask = async (req, res)=>{
    const id = req.params.id
    const {materia, tarea, entrega} = req.body;

    const updateTask = await task.updateOne({_id: id},
        {$set: {
            materia,
            tarea,
            entrega }
        });

    res.redirect('/task');
}

Ctrl.deleteTask = async (req, res)=>{
    const id = req.params.id;

    const deleteTask = await task.deleteOne({_id: id});

    res.json(deleteTask);
}

module.exports = Ctrl;