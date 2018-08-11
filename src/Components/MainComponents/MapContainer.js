import React, {Component, Fragment} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        initialCenter={{
          lat: 40.854885,
          lng: -88.081807
        }}
        zoom={15}
      >

        <Marker name={'Current location'} />

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDw-1SorRhzq5VDR9BNxrjk9IQ3IS_mB4U')
})(MapContainer)