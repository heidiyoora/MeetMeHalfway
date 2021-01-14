import React, { Component } from 'react';
import RestaurantCard from '../components/RestaurantCard.jsx';
import ResultsContainer from './ResultsContainer.jsx';

const RestContainer = ({ recommendations, friend, favs }) => {
  let recs;

  if (!recommendations) {
    recs = null
  } else {
    recs = recommendations.map((rec, i) => {
      const { id } = rec;
      let isFav = false;

      favs.forEach((fav) => {
        if (fav.id === id) isFav = true;
      });

      return (
        <RestaurantCard 
          key={i}
          info={rec}
          friend={friend}
          isFav={isFav}
        />
      );
    })
  }

  return(
    <div className = 'restContainer'>
      {recs}
    </div>
  )
}




export default RestContainer;