import React from 'react';


const metersToMiles = meters => {
  return Math.round((meters/1609.344) * 10) / 10;
}

const findDistance = (friend, restaurant) => {
 // find distance from restuarant to friend -> stretch!!
};

const fullStars = rating => {
  const total = [];
  let count = Math.floor(rating);
    while (count > 0){
      total.push(
        <img src='../assets/fullstar.png'></img>
      )
      count--;
    }
  return total;
}

const iAmAFav = boolean => {
  if (boolean === 'false') {
    return <img id='favIcon' src='../assets/emptyheart.png'></img>
  } else {
    return <img id='favIcon' src='../assets/fullheart.png'></img>
  }
}


const RestaurantCard = ({ info, friend, isFav }) => {
  console.log('restaurant card: ', info)
  console.log('I AM A FAV: ', isFav)

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

  // render the correct full rating stars
  const displayStars = fullStars(rating);
  // if half star rating:
  if (rating%1 !== 0){
    displayStars.push(
      <img src='../assets/halfstar.png'></img>
    )
  }

  //pricing
  const dollars = '💰'.repeat(price.length);

  // favIcon
  let FavIcon;
  if (isFav) {
    FavIcon = <img src='../assets/fullheart.png'></img>
  } else {
    FavIcon = <img src='../assets/emptyheart.png'></img>
  }


  return ( 
    <div className='restCardContainer'>
      <div>
        <img className='restPic' src={image_url}></img>
      </div>
      <div className='restCard'>
          <div id='cardHeader'>
              <a href={url} target='_blank'> {name}</a>
              <div id='innerflex'>
                <img src='../assets/thickpin.png'></img>
                <span>{distFromUser} miles</span>
              </div>
          </div>
          <article>
            <span id='categories' >{displayCategories}</span>
            <span id='restAdd' >{restAddress}</span>
            <span id='phone' >{display_phone}</span>
            <div id='totalrating'>
              <div className="stars" >
                {displayStars}
              </div>
              <span id='reviews' >   {review_count}</span>
            </div>
            <span id='price' >{dollars}</span>
            <div id='favIcon'>
              {FavIcon}
            </div>
          </article>
      </div>
    </div>
  )
};

export default RestaurantCard;

//<span id='rating' >{rating}</span>
//