const express = require('express');
const locationController = require('../controllers/locationController.js');
const yelpController = require('../controllers/yelpController.js');
const router = express.Router();

router.post('/',
  locationController.forwardGeocode,
  locationController.findMidpoint,
  yelpController.getList,
  (req, res) => res.status(200).json({
    message: 'hi'
  })
);




module.exports = router;