const ctrl = {};


ctrl.getHome = (req, res)=>{
    res.render("index");
}

module.exports = ctrl;