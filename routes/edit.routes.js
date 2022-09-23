const router  = require('express').Router();

const {getTask} = require('../controllers/edit.controller');


router.get('/edit/:id', getTask)


module.exports = router;