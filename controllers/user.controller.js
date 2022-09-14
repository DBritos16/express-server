
const user = require('../models/user')
const Ctrl = {}

Ctrl.getHome = async (req, res)=>{
    const personas = await user.find();
    console.log(personas);
    res.json(personas);
   
}

Ctrl.postHome = async (req, res)=>{
    
    const {nombre, edad, pais} = req.body;

    const persona = new user({
        nombre,
        edad,
        pais
    })

    const resultado = await persona.save()

    console.log(resultado);
}

Ctrl.putHome = (req, res)=>{
    res.send('Put home');
}

Ctrl.deleteHome = (req, res)=>{
    res.send('Delete home');
}

module.exports = Ctrl;