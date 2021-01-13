const fetch = require('node-fetch');

const yelpController = {};

yelpController.getList = (req, res, next) => {
  const midpoint = res.locals.midpoint;
  console.log('midpoint: ', midpoint)
  return next()
}




module.exports = yelpController;