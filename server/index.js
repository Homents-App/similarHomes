require('newrelic');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
const db = require('../database/postgresQueries.js');

const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression())

app.use('/:id', express.static(__dirname + '/../client/dist'));


// Fetches homes for the similar homes slider
app.get('/api/similar-homes/:id', (req, res) => {
  db.fetchSimilarHomes()
  .then(result => res.status(200).send(result.rows))
  .catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
})


// Fetches homes for the listings near address slider
app.get('/api/new-listings/:id', (req, res) => {
  db.fetchNewListings()
  .then(result => {
    res.status(200).send(result.rows)})
  .catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
})


// Updates home to be favorite or not
app.post('/api/similar-homes/favorites', (req, res) => {
  db.addOrRemoveFavorite(req.body)
  .then(result => res.status(400).send(result))
  .catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
})






////// NEW ROUTES BY ZACH ///////
app.post('/api/new-posting', (req, res) => {
  // console.log('body of new post request', req.body);
  var name = req.body.name;
  // delete req.body.name;
  var properties = req.body.properties;
  console.log('Here are the props: ', properties);
  db.addHome(name, properties)
  .then((message) => {
    console.log('new posting message: ', message);
    res.send(message)
  });
})


app.delete('/api/remove-posting/:id', (req, res) => {
  // console.log('body of delete request: ', req.body);
  db.deleteHome(req.params.id)
  .then((message) => res.send(message));
})

app.put('/api/update-posting/:id', (req, res) => {
  console.log('body of put request: ', req.body);
  var favorite = req.body.favorite;
  var id = req.params.id;
  db.updateHome(favorite, id)
  .then((message) => res.send(message));
})

app.get('/api/new-listings-by-id/:id', (req, res) => {
  // console.log('Id log: ', req.params.id);
  db.getHome(req.params.id)
  .then((home) => {
    // console.log('Inside .then of get home');
    // console.log(home.rows[0]);
    res.send(home.rows[0])
  });
})



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
