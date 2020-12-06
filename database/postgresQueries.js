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
  var query = 'UPDATE homes SET onFavorites = $1 WHERE unique_id = $2';
  var values = [value._id, value.onFavorites];
  return pool.query(query, values)
  .catch(err => console.log('error: ', err))
}


module.exports.fetchSimilarHomes = fetchSimilarHomes;
module.exports.fetchNewListings = fetchNewListings;
module.exports.addOrRemoveFavorite = addOrRemoveFavorite;