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
const friendSchema = new Schema({
  address: String,
  city: String,
  State: String,
})
