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
    display_phone, image_url, name, price, rating, reivew_count, transactions, url, categories, location, distance
  } = info;

  // concatenating the restaurant address to display
  let restAddress = location.display_address.join(', ');

  const displayCategories = categories.map(obj => delete obj.alias); // still an array of objects with 1 prop (title)

  //convert meters into miles -> this is the distance from restaurant to user
  const distFromUser = metersToMiles(distance);

 
  
  return ( 
    <div className='restCardContainer'>
      <div>
        <img className='restPic' src={image_url}></img>
      </div>
      <div className='restCard'>

      </div>
    </div>
  )
};

export default RestaurantCard;