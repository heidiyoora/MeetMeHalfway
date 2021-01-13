import React from 'react';

const AddressInput = (props) => {
  //console.log(props);
  return (
    <div id='addressInput'>
      <input type='text' id='friendAddress' placeholder='Address' />
      <br></br>
      <input type='text' id='friendCity' placeholder='City' />
      <br></br>
      <input type='text' id='friendState' placeholder='State' />
      <br></br>

      <button className='findFood' type='button' onClick={() => {
        const friendAddress = document.getElementById('friendAddress').value;
        const friendCity = document.getElementById('friendCity').value;
        const friendState = document.getElementById('friendState').value;

        const fullAddress = friendAddress + ' ' + friendCity + ' ' + friendState;
        console.log(fullAddress);
      }} > Let's get grubbing! </button>
    </div>

  )
}

export default AddressInput;