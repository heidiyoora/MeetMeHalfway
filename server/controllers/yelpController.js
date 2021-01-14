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
    limit: 10, // limits the # of options
    //radius: 3,
    //term: 
  })
    .then((response) => {
      const results = response.jsonBody.businesses // an array of objs
      console.log('length of query: ', results.length)

      res.locals.recommendations = results;
    })
    .catch(err => next({log: `Error from Yelp Fusion: ${err}`}))


  return next()
}

module.exports = yelpController;


/*

YELP RESOURCES:

   * RETURNED RESPONSE.JSONBODY.BUSINESSES -> an array of objects
  {
    id: 'VvsZAnEwU4c8Xkyrzx05Nw',
    alias: 'anytime-new-york',
    name: 'Anytime',
    image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/R9NTiyIrN0MR3614RZtb_g/o.jpg',
    is_closed: false,
    url: 'https://www.yelp.com/biz/anytime-new-york?adjust_creative=4FY2tF_aO-F3Q0hH42ZmYw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=4FY2tF_aO-F3Q0hH42ZmYw',
    review_count: 1435,
    categories: [ [Object], [Object], [Object] ],
    rating: 4.5,
    coordinates: { latitude: 40.74779, longitude: -73.98674 },
    transactions: [ 'pickup', 'restaurant_reservation', 'delivery' ],
    price: '$$',
    location: {
      address1: '23 W 32nd St',
      address2: 'Fl 3',
      address3: '',
      city: 'New York',
      zip_code: '10001',
      country: 'US',
      state: 'NY',
      display_address: [Array]
    },
    phone: '+16466697733',
    display_phone: '(646) 669-7733',
    distance: 2548.4691984520773
  }


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