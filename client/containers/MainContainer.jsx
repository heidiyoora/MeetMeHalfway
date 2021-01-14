import React, { Component } from 'react';
import SearchContainer from './SearchContainer.jsx';
import ResultsContainer from './ResultsContainer.jsx';
//<ResultsContainer> </ResultsContainer>

class MainContainer extends Component {
  constructor(){
    super();
    this.state = {
      user: {
        lat: 0,
        long: 0,
      },
      friend: {
        address: '',
        lat: 0,
        long: 0,
      },
      recommendations: [],
    };

    this.updateUserCoordinates = this.updateUserCoordinates.bind(this);
    this.grubButton = this.grubButton.bind(this);
  }

  updateUserCoordinates(latitude, longitude){
    // updates the state with the user's current location
    const userLat = latitude;
    const userLong = longitude;

    this.setState((prevState) => {
      const newState = {...prevState};
      newState.user.lat = userLat;
      newState.user.long = userLong;
      return newState;
    })
  }

  grubButton(address){
    // fetch request to server Api as POST
    // send body with friend address
      // send over friend address 
    fetch('/location', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify({
        friendAddress: address,
        user: {
          lat: this.state.user.lat,
          long: this.state.user.long,
        }
      }),
    })
    .then((data) => data.json())
    .then((data) => {
      //console.log(data.recommendations)
       this.setState((prevState) => {
        const newState = {...prevState};
        newState.recommendations = data.recommendations;
        newState.friend = data.friend;
        return newState;
      })

    })
    .catch((err) => console.log(err));
  }

  componentDidMount(){
    // grab the user's location using browser's location and update state 
    const successfulLookup = (position) => {
      const { latitude, longitude } =  position.coords;
      this.updateUserCoordinates(latitude, longitude);
    };
  
    navigator.geolocation.getCurrentPosition(successfulLookup, console.log);
  }

  componentDidUpdate(){
    console.log('State updated: ', this.state);
  }


  render() {
    
      return (
      <div className="mainContainer">
        <h1> MEET ME HALFWAY</h1>
        <SearchContainer grubButton={this.grubButton}> </SearchContainer>
        <ResultsContainer 
          recommendations={this.state.recommendations}
          friend={this.state.friend} 
          ></ResultsContainer>
      </div>
    )
  }
}



export default MainContainer;