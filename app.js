require('dotenv').config();
const express = require('express');
require('./database/conection')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
/* app.use(morgan('dev')) */

app.use(require('./routes/user.routes'))


app.listen(process.env.PORT, ()=>console.log(`Servidor corriendo en el puerto ${process.env.PORT}`))