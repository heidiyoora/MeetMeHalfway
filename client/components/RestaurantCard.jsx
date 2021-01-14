import React from 'react';


const metersToMiles = meters => {
  return Math.round((meters/1609.344) * 10) / 10;
}

const findDistance = (friend, restaurant) => {
 // find distance from restuarant to friend -> stretch!!
}

const RestaurantCard = ({ info, friend }) => {
  console.log('restaurant card: ', info)

  const { 
    display_phone, image_url, name, price, rating, review_count, transactions, url, categories, location, distance
  } = info;

  // concatenating the restaurant address to display
  let restAddress = location.display_address.join(', ');

  const displayCategories = categories.map(obj => {
    delete obj.alias;
    return obj.title;
  }).join(' '); // still an array of objects with 1 prop (title)
  

  //convert meters into miles -> this is the distance from restaurant to user
  const distFromUser = metersToMiles(distance);


  
  return ( 
    <div className='restCardContainer'>
      <div>
        <img className='restPic' src={image_url}></img>
      </div>
      <div className='restCard'>
          <div id='cardHeader'>
              <h2> {name}</h2>
              <div id='innerflex'>
                <img src='../assets/thickpin.png'></img>
                <span>{distFromUser} miles</span>
              </div>
          </div>

          <span>{displayCategories}</span>
          <span>{restAddress}</span>
          <span>{display_phone}</span>
          <div id='otherflex'>
              <span>{rating}</span>
              <span>{price}</span>
              <span>{review_count}</span>
          </div>
      </div>
    </div>
  )
};

export default RestaurantCard;