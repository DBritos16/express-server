const router = require('express').Router()

const {getUser, postUser, putUser, deleteUser } = require('../controllers/user.controller');

router.get('/user', getUser);

router.post('/user', postUser);

router.put('/user', putUser);

router.delete('/user', deleteUser);


module.exports = router;