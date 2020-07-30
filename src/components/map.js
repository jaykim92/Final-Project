import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 33.669445,
      lng: -117.823059,
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly

      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBzMU8Sce5illSkT0uXrZgEN7rqAoW1hNI" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        ></GoogleMapReact>
     
      </div>
    );
  }
}


 
export default SimpleMap;