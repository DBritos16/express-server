const router = require('express').Router();

const {getTask, getTasks, postTask, putTask, deleteTask} = require('../controllers/task.controller');

router.get('/task', getTask);

router.post('/task', postTask);

router.put('/task/:id', putTask);

router.delete('/task/:id', deleteTask);

module.exports = router;    