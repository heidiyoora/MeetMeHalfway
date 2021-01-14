import React, { Component } from 'react';
import RestContainer from '../containers/RestContainer.jsx'
import MapContainer from '../containers/MapContainer.jsx'
//import RestaurantCard from '../components/RestaurantCard.jsx'

const ResultsContainer = ({ recommendations, friend }) => {
  /*let recs;

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
  }*/

  return(
    <div className = 'resultsContainer'>
        <RestContainer 
        recommendations={recommendations}
        friend={friend}
        />
        <MapContainer />
    </div>
  )
}

export default ResultsContainer;