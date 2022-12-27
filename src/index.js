// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors()); //sirve para poder acceder desde cualquien navegador
server.use(express.json());
server.set('view engine', 'ejs');

// Arrancamos el servidor en el puerto 4000

const serverPort = process.env.PORT || 4000;
console.log(process.env);
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// const savedCards = [];
const db = new Database('./src/database.db', {
  verbose: console.log,
});
// Escribimos los endpoints que queramos
//Endpoint crear tarjeta
server.post('/card', (req, res) => {
  //
  if (
    req.body.palette === '' ||
    req.body.name === '' ||
    req.body.job === '' ||
    req.body.phone === '' ||
    req.body.email === '' ||
    req.body.linkedin === '' ||
    req.body.github === '' ||
    req.body.photo === ''
  ) {
    const responseError = {
      error: 'Faltan datos',
      success: false,
    };
    res.json(responseError);
  } else {
    const query = db.prepare(
      'INSERT INTO cards(palette, name, job, phone, email, linkedin, github, photo) VALUES(?, ?, ?, ?, ?, ?, ?, ?)'
    );
    const resultCards = query.run(
      req.body.palette,
      req.body.name,
      req.body.job,
      req.body.phone,
      req.body.email,
      req.body.linkedin,
      req.body.github,
      req.body.photo
    );
    console.log(resultCards);
    // savedCards.push(newCard);
    const responseSuccess = {
      cardURL: `http://localhost:4000/card/${resultCards.lastInsertRowid}`,
      success: true,
    };
    res.json(responseSuccess);
  }
});

//Petición para pintar la tarjeta
server.get('/card/:id', (req, res) => {
  const query = db.prepare('SELECT * FROM cards WHERE id = ?');
  const resultSelectedCard = query.get(req.params.id);
  //Motor plantillas
  res.render('user-card', resultSelectedCard);
});

//Crear servidor de estáticos
const staticServer = './src/public-react';
server.use(express.static(staticServer));
const serverStyles = './src/public-css';
server.use(express.static(serverStyles));
