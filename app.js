const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

// analiza solicitudes entrantes con formato urlencodes que es el standar para formularios HTML. Entiende los datos desde un HTML POST y los convierte a un objeto JS.
app.use(express.urlencoded({ extended: true }));
// sirve archivos estáticos como HTML, CSS y JS desde una carpeta especificada   
app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);






server.listen(3000); 