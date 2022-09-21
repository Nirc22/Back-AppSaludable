const express = require('express');
require('dotenv').config();
const{dbConnection} = require('./database/config');

const app = express();

dbConnection();

//app.use(express.static('Public'));

app.use(express.json());

app.use('api/usuario',require('./Routes/usuario'))
app.use('/api/pais',require('./Routes/pais'))
app.use('api/resultado',require('./Routes/resultadoExamen'))
app.use('api/recomendacion',require('./Routes/recomendacion'))

app.listen(process.env.Port, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.Port}`);
});

module.exports = app