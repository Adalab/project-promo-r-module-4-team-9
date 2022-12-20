// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors()); //sirve para poder acceder desde cualquien navegador
server.use(express.json());

// Arrancamos el servidor en el puerto 4000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  //req.body
  const responseSuccess = {
    cardURL: 'https://dev.adalab.es/card/16715375682998012',
    success: true,
  };
  console.log(responseSuccess);
  console.log(req.body);
  res.json(responseSuccess);
});
