const fetch = require('node-fetch');

const locationController = {};

const openCageAPIKey = '917441060cc446ec958162b37b44dc9c';

locationController.forwardGeocode = (req, res, next) => {
  console.log('locationCont.forwardGeocode: ', req.body.address);
  // fetch OpenCage API request


  return next();
};




module.exports = locationController;