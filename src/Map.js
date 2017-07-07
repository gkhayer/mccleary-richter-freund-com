import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


export default class Map extends React.Component {

  state = {
    ready: false,
  }

  componentWillMount() {
    window.initMap = this.initMap.bind(this);
    this.loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyCkxq4yB7P2LbB8YjeXmEKBe05PLUzWvRs&callback=initMap');
  }

  initMap() {
    this.setState({ready: true});
  }

  loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
  }

  render() {
    const center = {
      lat: 35.0894704,
      lng: -106.6538273,
    };

    const GettingStartedGoogleMap = withGoogleMap(props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={15}
        defaultCenter={center}
      >
        <Marker position={center} />
      </GoogleMap>
    ));

    return (this.state.ready ?
      <div style={{height: 500}}>
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
        />
      </div> : null);
  }
}