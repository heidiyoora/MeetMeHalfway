const express = require('express');
const locationController = require('../controllers/locationController.js');
const router = express.Router();

router.post('/',
  locationController.forwardGeocode,
  (req, res) => res.status(200).json({
    message: 'hi'
  })
);




module.exports = router;