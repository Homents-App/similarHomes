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

app.use(express.static(__dirname + '/../client/dist'));


// Fetches homes for the similar homes slider
app.get('/api/similar-homes', (req, res) => {
  db.fetchSimilarHomes()
  .then(result => res.status(200).send(result.rows))
  .catch(err => {
    console.log(err);
    res.status(400).send(err);
  })
})


// Fetches homes for the listings near address slider
app.get('/api/new-listings', (req, res) => {
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
  console.log('body of new post request', req.body);
  var name = req.body.name;
  delete req.body.name;
  var properties = req.body;
  db.addHome(name, properties, (message) => res.send(message));
})


app.delete('/api/remove-posting', (req, res) => {
  console.log('body of delete request: ', req.body);
  db.deleteHome(req.body, (message) => res.send(message));
})

app.put('/api/update-posting', (req, res) => {
  console.log('body of put request: ', req.body);
  var filter = req.body.filter;
  var change = req.body.change;
  db.updateHome(filter, change, (message) => res.send(message));
})





app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
