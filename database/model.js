const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/similar', { useNewUrlParser: true })
    .then(result => console.log('database connected!'))
    .catch(err => console.log('database connection error ', err));

const db = mongoose.connection;

const similarHomesSchema = new mongoose.Schema({
  unique_id: {type: String, index: true, unique: true, sparse: true},
  streetAddress: String,
  state: String,
  zipcode: String,
  neighborhood: String,
  city: String,
  bedrooms: Number,
  bathrooms: Number,
  sqft: Number,
  publishDate: Date,
  price: String,
  priceChange: String,
  onFavorites: Boolean,
  img_url: String
});

let SimilarHome = mongoose.model('SimilarHome', similarHomesSchema);


const save = (dataArr) => {
  SimilarHome.insertMany(dataArr);
}

const deleteAll = () => {
  db.dropDatabase();
}

const fetchSimilarHomes = () => {
  return SimilarHome.find({}).limit(15);
}

const fetchNewListings = () => {
  return SimilarHome.find({city: 'Ramsgate'}).limit(15);
}

const addOrRemoveFavorite = (value) => {
  return SimilarHome.findByIdAndUpdate(value._id, value.onFavorites);
}


///////// NEW FUNCTIONS BY ZACH ////////////
const deleteOne = () => {

}

const addOne = () => {

}

const updateOne = () => {

}


module.exports.save = save;
module.exports.deleteAll = deleteAll;
module.exports.fetchSimilarHomes = fetchSimilarHomes;
module.exports.fetchNewListings = fetchNewListings;
module.exports.addOrRemoveFavorite = addOrRemoveFavorite;
