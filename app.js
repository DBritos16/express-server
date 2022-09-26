const express = require('express');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();
require('./database/conection');
require("ejs");

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(require('./routes/user.routes'));
app.use(require('./routes/task.routes'));
app.use(require('./routes/edit.routes'));

app.listen(process.env.PORT, ()=>console.log(`Servidor corriendo en el puerto ${process.env.PORT}`));