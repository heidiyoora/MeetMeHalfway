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
      <input type='text' id='friendZipcode' placeholder='Zipcode' />
      <br></br>

      <button className='findFood' type='button' onClick={() => {
        const friendAddress = document.getElementById('friendAddress').value;
        const friendCity = document.getElementById('friendCity').value;
        const friendState = document.getElementById('friendState').value;
        const friendZipcode = document.getElementById('friendZipcode').value;

        if (!friendAddress || !friendCity || !friendState || !friendZipcode) return alert('all fields are required');

        let fullAddress = friendAddress + ' ' + friendCity + ' ' + friendState + ' ' + friendZipcode;

        props.grubButton(fullAddress);
      }} > Let's get grubbing! </button>
    </div>

  )
}

export default AddressInput;