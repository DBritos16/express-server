
const user = require('../models/user')
const Ctrl = {}

Ctrl.getUser = async (req, res)=>{
    const personas = await user.find();

    res.json(personas);   
}

Ctrl.postUser = async (req, res)=>{
    
    const {nombre, edad, pais} = req.body;

    const persona = new user({
        nombre,
        edad,
        pais
    })

    const guardar = await persona.save()

    res.json(guardar);
}

Ctrl.putUser = async (req, res)=>{
    const {id, nombre, edad, pais} = req.body;

    const actualizar = await user.updateOne({_id: id},
        {$set: {
            nombre, 
            edad, 
            pais }
        })
    
    res.json(actualizar);
}

Ctrl.deleteUser = async (req, res)=>{
    const {id} = req.body;

    const eliminar = await user.deleteOne({_id: id});

    res.json(eliminar);
}

module.exports = Ctrl;