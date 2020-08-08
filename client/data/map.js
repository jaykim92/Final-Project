import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
 
const heatmapData = [
  { lat: 40.7828, lng: -74.0065, weight: 1 },
  { lat: 41.7121, lng: -74.0042, weight: 1 },
  { lat: 40.7102, lng: -75.006, weight: 1 },
  { lat: 40.7123, lng: -74.0052, weight: 1 },
  { lat: 40.7032, lng: -74.0042, weight: 1 },
  { lat: 40.7198, lng: -74.0024, weight: 1 },
  { lat: 41.7223, lng: -74.0053, weight: 1 },
  { lat: 40.7181, lng: -74.0042, weight: 1 },
  { lat: 40.7124, lng: -74.0023, weight: 1 },
  { lat: 40.7648, lng: -74.0012, weight: 1 },
  { lat: 41.7128, lng: -74.0027, weight: 1 },
  { lat: 40.7223, lng: -74.0153, weight: 1 },
  { lat: 40.7193, lng: -74.0052, weight: 1 },
  { lat: 40.7241, lng: -75.0013, weight: 1 },
  { lat: 41.7518, lng: -74.0085, weight: 1 },
  { lat: 40.7599, lng: -74.0093, weight: 1 },
  { lat: 41.7523, lng: -74.0021, weight: 1 },
  { lat: 40.7342, lng: -74.0152, weight: 1 },
  { lat: 40.7484, lng: -75.0042, weight: 1 },
  { lat: 40.7929, lng: -75.0023, weight: 1 },
  { lat: 40.7292, lng: -74.0013, weight: 1 },
  { lat: 40.794, lng: -74.0048, weight: 1 },
  { lat: 40.7874, lng: -74.0052, weight: 1 },
  { lat: 40.7824, lng: -74.0024, weight: 1 },
  { lat: 40.7232, lng: -74.0094, weight: 1 },
  { lat: 41.7342, lng: -74.0152, weight: 1 },
  { lat: 41.7484, lng: -74.0012, weight: 1 },
  { lat: 41.7929, lng: -74.0073, weight: 1 },
  { lat: 41.7292, lng: -74.0013, weight: 1 },
  { lat: 41.794, lng: -74.0058, weight: 1 },
  { lat: 41.7874, lng: -74.0352, weight: 1 },
  { lat: 41.7824, lng: -74.0024, weight: 1 },
  { lat: 41.7232, lng: -74.0094, weight: 1 },
  { lat: 41.0342, lng: -75.0152, weight: 1 },
  { lat: 41.0484, lng: -75.0012, weight: 1 },
  { lat: 41.0929, lng: -75.0073, weight: 1 },
  { lat: 41.0292, lng: -74.0013, weight: 1 },
  { lat: 41.094, lng: -74.0068, weight: 1 },
  { lat: 41.0874, lng: -74.0052, weight: 1 },
  { lat: 41.0824, lng: -74.0024, weight: 1 },
  { lat: 41.0232, lng: -74.0014, weight: 1 }
];
 
export default class SimpleMap extends React.Component {

render(){

    return (
      // Important! Always set the container height explicitly

      <div style={{ height: "90vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBzMU8Sce5illSkT0uXrZgEN7rqAoW1hNI" }}
          defaultCenter={{ lat: 41.0232, lng: -74.0014 }}
          defaultZoom={11}
          // heatmapLibrary={true}
          // heatmap={{data:heatmapData}}
        ><h2>test</h2></GoogleMapReact>
      </div>
    );
}
}

