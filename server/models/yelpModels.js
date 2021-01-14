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


/* MODELS */

const friendSchema = new Schema({
  address: String,
  coordinates: {
    latitude: Number,
    longitude: Number,
  },
  midpoint: {
    latitude: Number,
    longitude: Number,
  },
});

const Friend = mongoose.model('friend', friendSchema);

const favoriteSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  image_url: String,
  url: String,
  review_count: Number,
  categories: [{
    title: String,
  }],
  rating: Number,
  coordinates: {
    latitude: Number,
    longitude: Number,
  }, 
  transactions: [String],
  price: String,
  location: {
    address1: { type: String, required: true },
    address2: String,
    address3: String,
    city: String,
    zip_code: String,
    country: String,
    state: String,
    display_address: [String],
  },
  phone: String,
  display_phone: String,
  distance: Number,
});

const Favorite = mongoose.model('favorite', favoriteSchema);


module.exports = {
  Friend,
  Favorite
};



/*

// helper schemas
const category = new Schema({
  title: String,
});

const deconstructuredLocation = new Schema({
  address1: { type: String, required: true },
  address2: String,
  address3: String,
  city: String,
  zip_code: String,
  country: String,
  state: String,
  display_address: [String],
})



*/