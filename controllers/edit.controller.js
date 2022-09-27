const { render } = require("ejs");
const task = require("../models/task");

const ctrl = {};


ctrl.getTask = async (req, res)=>{
    const id = req.params.id
    const getTask = await task.find({_id: id});
    
    res.json(getTask);
}

module.exports = ctrl;