// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors()); //sirve para poder acceder desde cualquien navegador
server.use(express.json());
server.set('view engine', 'ejs');

// Arrancamos el servidor en el puerto 4000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const savedCards = [];
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
    const uniq = 'id' + new Date().getTime();
    const newCard = { id: uniq, ...req.body };
    savedCards.push(newCard);
    const responseSuccess = {
      cardURL: `http://localhost:4000/card/${newCard.id}`,
      success: true,
    };
    res.json(responseSuccess);
  }
});

//Petición para pintar la tarjeta
server.get('/card/:id', (req, res) => {
  //Nos devuelve el id del objeto con la URL
  console.log(req.params.id);
  const userCardObject = {
    palette: '3',
    name: 'Pepa',
    job: 'Cake Developer',
    phone: '123456789',
    email: 'pepa@cakes.com',
    linkedin: 'https://www.linkedin.com/in/pepa-sastre-0675222/',
    github: 'https://www.linkedin.com/in/pepa-sastre-0675222/',
    photo: 'https://es.web.img2.acsta.net/pictures/14/02/27/12/49/374639.jpg',
  };

  //Hasta que no guardemos saveCards en una base de datos, cada vez que refrescamos o hacemos un cambio en el archivo se vacía
  savedCards.find((card) => card.id === req.params.id);
  //Motor plantillas
  res.render('user-card', userCardObject);
});

//Crear servidor de estáticos
const staticServer = './src/public-react';
server.use(express.static(staticServer));
const serverStyles = './src/public-css';
server.use(express.static(serverStyles));
