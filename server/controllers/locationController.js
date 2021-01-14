const fetch = require('node-fetch');

const locationController = {};

const openCageAPIKey = '917441060cc446ec958162b37b44dc9c';
const findMidPt = (person1, person2) => {
  return {
    latitude: (person1.lat + person2.lat)/2,
    longitude: (person1.long + person2.long)/2
  }
}

locationController.forwardGeocode = (req, res, next) => {
  // verify requested address is a string
  if (typeof req.body.friendAddress !== 'string'){
    return next({
      log: 'ERROR: locationController.forwardGeocode - requested address is not a string'
    });
  }
  // sanitize string to have no white spaces
  const address = req.body.friendAddress.replace(/\s/g, '%20');
  //console.log('locationCont.forwardGeocode: ', address);

  // fetch OpenCage API request to retrieve coords of friend location
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${openCageAPIKey}&bounds=-76.12021,39.55986,-71.68899,41.81065&countrycode=us&limit=1`)
    .then((response) => response.json())
    .then((data) => {
      const friendLat = data.results[0].geometry.lat;
      const friendLong = data.results[0].geometry.lng;

      res.locals.friend = {
        lat: friendLat,
        long: friendLong
      }
      return next();
    })
    .catch((err) => next({log: `ERROR: locationController.forwardGeocode - unable to successfully retrieve info from OpenCage - ${err}`}));
};

locationController.findMidpoint = (req, res, next) => {
  console.log('user: ', req.body.user);
  console.log('friend: ', res.locals.friend);

  const user = req.body.user;
  const friend = res.locals.friend;

  try{
    res.locals.midpoint = findMidPt(user, friend);
    return next();
  }

  catch (err){
    return next({log: `ERROR in locationController.findMidpoint - ${err}`})
  }
};


module.exports = locationController;