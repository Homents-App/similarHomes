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
const deleteHome = (params, cb) => {
  SimilarHome.deleteOne(params)
  .then((results) => cb(results))
  .catch((err) => cb(err))
}

const addHome = (name, properties, cb) => {
  console.log('name: ', name, ' Properties: ', properties);
  name = new SimilarHome(properties);
  name.save(function(err, name) {
    if (err) {
      return console.error(err);
    } else {
      console.log('successful write!')
      cb(name);
    }

  })
}

const updateHome = (filter, home, cb) => {
  SimilarHome.updateOne(filter, home)
  .then((message) => cb(message))
  .catch((err) => cb(err))
}


module.exports.save = save;
module.exports.deleteAll = deleteAll;
module.exports.fetchSimilarHomes = fetchSimilarHomes;
module.exports.fetchNewListings = fetchNewListings;
module.exports.addOrRemoveFavorite = addOrRemoveFavorite;
module.exports.addHome = addHome;
module.exports.deleteHome = deleteHome;
module.exports.updateHome = updateHome;