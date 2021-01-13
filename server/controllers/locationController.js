const fetch = require('node-fetch');

const locationController = {};

const openCageAPIKey = '917441060cc446ec958162b37b44dc9c';

locationController.forwardGeocode = (req, res, next) => {
  // verify requested address is a string
  if (typeof req.body.address !== 'string'){
    return next({
      log: 'ERROR: locationController.forwardGeocode - requested address is not a string',
      message: { err: 'Internal Server Error'}
    });
  }
  // sanitize string to have no white spaces
  const address = req.body.address.replace(/\s/g, '%20');
  console.log('locationCont.forwardGeocode: ', address);

  
  // fetch OpenCage API request to retrieve coords
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${openCageAPIKey}&bounds=-76.12021,39.55986,-71.68899,41.81065&countrycode=us&limit=1`)
    .then((response) => response.json())
    .then((data) => {console.log(data.results)
    
    })
    .catch((err) => console.log('error in Open Cage Fetch request: ', err))

  return next();
};




module.exports = locationController;