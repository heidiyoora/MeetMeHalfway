import React, { Component } from 'react';
import AddressInput from '../components/AddressInput.jsx';


class SearchContainer extends Component {
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

    };

    this.updateUserCoordinates = this.updateUserCoordinates.bind(this);
    //this.handleFriendAddressInput = this.handleFriendAddressInput.bind(this);
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

  /*handleFriendAddressInput(e){
    let val = e.target.value;
    if (typeof val === ' number'){
      val = val.toString();
    }
    
    this.setState((prevState) => {
      const newState = {... prevState};
      newState.friend.address = newState.friend.address.concat(val);
      return newState; 
    })
  }*/
  
  grubButton(address){
    // fetch request to server Api as POST
    // send body with friend address
      // send over friend address 


    fetch('/location', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify({address: address}),
    })
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
    //receieve data back -> update state to have friend's long & lat
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


  render(){

    return (
      <div className='searchContainer'>
        <p>Enter your friend's address</p>
        <AddressInput grubButton={this.grubButton} />
      </div>
    )
  }
}



export default SearchContainer;