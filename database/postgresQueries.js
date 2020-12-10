const { pool } = require('./postgresModel')



/////////////////////
const fetchSimilarHomes = () => {
  var query = 'SELECT * FROM homes LIMIT 15';
  var value
  return pool.query(query)
  .catch(err => console.log('error: ', err))
}

const fetchNewListings = () => {
  var query = 'SELECT * FROM homes WHERE city = $1 LIMIT 15';
  var value = ['Ramsgate']// could use this to select specific city
  return pool.query(query, value)
  .catch(err => console.log('error: ', err))
}

const addOrRemoveFavorite = (value) => {
  var query = 'UPDATE homes SET onFavorites = $2 WHERE unique_id = $1';
  var values = [value._id, value.onFavorites];
  return pool.query(query, values)
  .catch(err => console.log('error: ', err))
}


///////////// POST a new home to db
const addHome = (name, properties, cb) => {
  var query = 'INSERT INTO homes (unique_id, streetAddress, state, zipcode, neighborhood, city, bedrooms, bathrooms, sqft, publishDate, price, priceChange, onFavorites, img_url) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)';
  var values = properties;
  return pool.query(query, values)
  .catch(err => console.log('error: ', err))
}

/////////// DELETE home from db
const deleteHome = (id) => {
  var query = 'DELETE homes WHERE id = $1';
  var values = [id];
  return pool.query(query, values)
  .catch(err => console.log('error: ', err))
}


//////////// GET specific home from db
const getHome = (id) => {
  var query = 'SELECT * FROM homes WHERE id = $1';
  var value = [id];
  return pool.query(query, value)
  .catch(err => console.log('error: ', err))
}


////////// UPDATE specific home from db
const updateHome = (favorite, id) => {
  var query = 'UPDATE homes SET onFavorites = $1 WHERE id = $2';
  var values = [favorite, id];
  return pool.query(query, values)
  .catch(err => console.log('error: ', err));
}


module.exports.fetchSimilarHomes = fetchSimilarHomes;
module.exports.fetchNewListings = fetchNewListings;
module.exports.addOrRemoveFavorite = addOrRemoveFavorite;
module.exports.deleteHome = deleteHome;
module.exports.getHome = getHome;
module.exports.updateHome = updateHome;
module.exports.addHome = addHome;