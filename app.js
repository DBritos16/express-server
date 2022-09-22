const express = require('express');
const path = require('path');
require('dotenv').config();
require("ejs");



const app = express();
require('./database/conection');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
/* app.use(morgan('dev')) */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(require('./routes/user.routes'));
app.use(require('./routes/task.routes'));
app.use(require('./routes/home.routes'));



app.listen(process.env.PORT, ()=>console.log(`Servidor corriendo en el puerto ${process.env.PORT}`));