const router = require("express").Router();

const {getHome} = require('../controllers/home.controller')

router.get("/home", getHome);

module.exports = router;