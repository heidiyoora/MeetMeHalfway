const fetch = require('node-fetch');
const yelp = require('yelp-fusion');

const yelpController = {};

const yelpAPIKey = 'XYvr-fgQfWmFIsLpYrDN1XQSnlFzBU9M9xNLQUKIFh75KHGI8d06aVCK63JBV4ExIxTDwcO06ElhdoBIIIzmsYq3tPlKY8IRIMOIrVzFgLmQXH7KjqmlhsFnOi31X3Yx';
const yelpClientID = '4FY2tF_aO-F3Q0hH42ZmYw';
const client = yelp.client(yelpAPIKey);


yelpController.getList = (req, res, next) => {
  const midpoint = res.locals.midpoint;
  console.log('midpoint: ', midpoint);

  // API GET request to yelp using yelp-fusion
  client.search({
    latitude: midpoint.latitude,
    longitude: midpoint.longitude,
    open_now: true,
    sort_by: 'rating',
    //radius: 3,
    //term: 
  })
    .then(response => console.log(response))
    .catch(err => next({log: `Error from Yelp Fusion: ${err}`}))

    /*
  fetch(`https://api.yelp.com/v3/businesses/search/latitude=${midpoint.latitude}&longitude=${midpoint.longitude}&sort_by=rating&radius=3&open_now=true`)
    .then((response) => response.json())
    .then((data) => console.log('from YELP: ', data))
    .catch((err) => next({
      log: `Error in yelpController.getList - error message from Yelp ${err}`
    }))*/
  return next()
}




module.exports = yelpController;


/*

YELP RESOURCES:

*AUTHENTICATE
  To authenticate API calls with the API Key, set the Authorization HTTP header value as Bearer API_KEY:
    *  Authorization: Bearer yelpAPIKey
  https://www.yelp.com/developers/documentation/v3/authentication


* POINTS: 
    businesses	1
    business	10
    business_attributes	1
    business_attribute	2
    reviews	1
    review	5
    event	1
    user	1
    location	5
    coordinates	1
    category	1

* FAQ: 
    https://www.yelp.com/developers/faq 



*/