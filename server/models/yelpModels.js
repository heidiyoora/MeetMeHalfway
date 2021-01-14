const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://heidimmh:meetme@cluster0.4kvsx.mongodb.net/meetme?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'meetme'
  })
  .then((data) => console.log('Connected to Mongo DB'))
  .catch((err) => console.log('Unable to connect to Mongo DB: ', err));

const Schema = mongoose.Schema;

// 3 collections: Saved Locations, Favorite Restaurants, Favorite Bars
const locationSchema = new Schema({
  latitude: Number,
  longitude: Number,
});

const categories//

//const Location = mongoose.model('location', locationSchema);

const friendSchema = new Schema({
  address: String,
  coordinates: {locationSchema},
  midpoint: {locationSchema},
});

const Friend = mongoose.model('friend', friendSchema);

const favoriteSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  image_url: String,
  url: String,
  review_count: Number,
  categories: [],


})
