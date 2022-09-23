
const user = require('../models/user')
const Ctrl = {}

Ctrl.getUser = async (req, res)=>{
    const users = await user.find();

    res.json(users);   
}

Ctrl.postUser = async (req, res)=>{
    
    const {nombre, edad, pais} = req.body;

    const newUser = new user({
        nombre,
        edad,
        pais
    })

    const saveUser = await newUser.save()

    res.json(saveUser);
}

Ctrl.putUser = async (req, res)=>{
    const {id, nombre, edad, pais} = req.body;

    const updateUser = await user.updateOne({_id: id},
        {$set: {
            nombre, 
            edad, 
            pais }
        })
    
    res.json(updateUser);
}

Ctrl.deleteUser = async (req, res)=>{
    const {id} = req.body;
    const {id1} = req.params;

    const deleteUser = await user.deleteOne({_id: id});

    res.json(deleteUser);
}

module.exports = Ctrl;