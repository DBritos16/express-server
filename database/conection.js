const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL).then(()=>console.log('Conexion a la BD exitosa')).catch(err=>console.log(err));