const router = require('express').Router();

const {getTask, postTask, putTask, deleteTask} = require('../controllers/task.controller');

router.get('/task', getTask);

router.post('/task', postTask);

router.post('/update/:id', putTask);

router.get('/delete/:id', deleteTask);

module.exports = router;    