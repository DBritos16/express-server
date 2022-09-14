const router = require('express').Router()

const {getHome, postHome, putHome, deleteHome } = require('../controllers/user.controller');

router.get('/home', getHome);

router.post('/home', postHome);

router.put('/home', putHome);

router.delete('/home', deleteHome);


module.exports = router;