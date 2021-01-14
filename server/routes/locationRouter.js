const express = require('express');
const locationController = require('../controllers/locationController.js');
const yelpController = require('../controllers/yelpController.js');
const mongoController = require('../controllers/mongoController.js');
const router = express.Router();

router.post('/',
  locationController.forwardGeocode,
  locationController.findMidpoint,
  yelpController.getList,
  (req, res) => res.status(200).json({
    recommendations: res.locals.recommendations,
    friend: res.locals.friend,
  })
);




module.exports = router;