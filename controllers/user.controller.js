
const user = require('../models/user')
const Ctrl = {}

Ctrl.getHome = async (req, res)=>{
    const personas = await user.find();

    res.json(personas);   
}

Ctrl.postHome = async (req, res)=>{
    
    const {nombre, edad, pais} = req.body;

    const persona = new user({
        nombre,
        edad,
        pais
    })

    const guardar = await persona.save()

    console.log(guardar);
}

Ctrl.putHome = async (req, res)=>{
    const {id, nombre, edad, pais} = req.body;

    const actualizar = await user.updateOne({_id: id},{$set: {nombre, edad, pais }})
    
    console.log(actualizar);
}

Ctrl.deleteHome = async (req, res)=>{
    const {id} = req.body;

    const eliminar = await user.deleteOne({_id: id});

    res.json(eliminar);
}

module.exports = Ctrl;