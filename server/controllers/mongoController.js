const models = require('../models/yelpModels');

const mongoController = {};


// CRUD into DB here
// using res.locals.recommendations -> yelp responses stored here

// saves friend location -> req.body.friendAddress
mongoController.saveFriendLoc = (req, res, next) => {
  console.log('mongoController: ', req.body.friendAddress);
  // confirm if friendAddress is a string
  if (typeof req.body.friendAddress !== 'string') return next({
    log: 'ERROR: mongoController.saveFriendLoc - req.body.friendAddress is not a string'});

  // verify if friendAddress already exists
  const friendAddress = req.body.friendAddress.toLowerCase();
  models.Friend.findOne({
    address: friendAddress
  }, (err, data)=> {
    // error in find request to DB
    if (err) {
      return next({log: `ERROR: mongoController.saveFriendLoc - invalid find search in MongoDB: ${err}`})
    };
  
    // if friend location doesn't exist -> save!
    if (!data){
      models.Friend.create({
        address: friendAddress,
        coordinates: res.locals.friend,
        midpoint: res.locals.midpoint,
      },

      (err, data) => {
        if (err){
          return next({log: `ERROR: mongoController.saveFriendLoc - error saving location in MongoDB: ${err}`});
        } else {
          console.log('mongoController.saveFriendLoc - friend loc saved in DB')
          return next();
        }
      })
    } else { // if friendLocation already exists, go to next
      console.log('mongoController.saveFriendLoc - friendLoc already in DB')
      return next();
    }
  })
};

/* eventually create an auto complete
mongoController.getFriendLoc = (req, res, next) => {

};
*/

/* to display favs
mongoController.getFav = (req, res, next) => {

};
*/

mongoController.addFav = (req, res, next) => {

};

mongoController.deleteFav = (req, res, next) => {

};


module.exports = mongoController;