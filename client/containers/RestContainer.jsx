import React, { Component } from 'react';
import RestaurantCard from '../components/RestaurantCard.jsx';
import ResultsContainer from './ResultsContainer.jsx';

const RestContainer = ({ recommendations, friend }) => {
  let recs;

  if (!recommendations.length) {
    recs = null;
  } else {
    recs = recommendations.map((rec, i) => {
      return (
        <RestaurantCard 
          key={i}
          info={rec}
          friend={friend}
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