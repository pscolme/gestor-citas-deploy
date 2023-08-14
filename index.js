require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./src/rest/routes');
const PORT = process.env.PORT || 3001;

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());
app.use(routes);
app.set('appName', 'GESTOR CITAS');

app.listen(PORT, () => {
    console.log('**************************');
    console.log('*** FISIOTERAPIA NEROS ***');
    console.log('**************************');
    console.log(`Server running on port ${PORT}`);
    console.log('App name:', app.get('appName'));
});