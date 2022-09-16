const router = require('express').Router();

const {getTask, postTask, putTask, deleteTask} = require('../controllers/task.controller');

router.get('/task', getTask);

router.post('/task', postTask);

router.put('/task', putTask);

router.delete('/task', deleteTask);

module.exports = router;