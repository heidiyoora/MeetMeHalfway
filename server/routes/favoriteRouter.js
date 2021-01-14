const express = require('express');
const mongoController = require('../controllers/mongoController.js');
const { mongo } = require('mongoose');
const router = express.Router();

// save favorite restaurant/bar -> send id 
router.post('/:id',
  mongoController.getFav,
  mongoController.addFav,
  (req, res) => res.status(200).json({
    message: 'HELLO FROM FAVROUTER'
  })
);


module.exports = router;