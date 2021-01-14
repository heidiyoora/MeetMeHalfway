const express = require('express');
const locationController = require('../controllers/locationController.js');
const yelpController = require('../controllers/yelpController.js');
const mongoController = require('../controllers/mongoController.js');
const { mongo } = require('mongoose');
const router = express.Router();


// has:
  // req.body.friendAddress = address string
  // res.locals.friend = obj of coordinates {lat: number, long: number}
  // res.locals.midpoint = obj of coordinate {latitude: number, longitude: number}
router.post('/',
  locationController.forwardGeocode,
  locationController.findMidpoint,
  yelpController.getList,
  mongoController.getFav,
  mongoController.saveFriendLoc,
  (req, res) => res.status(200).json({
    recommendations: res.locals.recommendations,
    friend: res.locals.friend,
    favs: res.locals.favs,
  })
);




module.exports = router;