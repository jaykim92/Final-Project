import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GoogleMapReact from 'google-map-react';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//testing area 
// const heatmapData = [
//   { lat: 40.7828, lng: -74.0065, weight: 20 },
//   { lat: 41.7121, lng: -74.0042, weight: 20 },
//   { lat: 40.7102, lng: -75.006, weight: 20 },
//   { lat: 40.7123, lng: -74.0052, weight: 20 },
//   { lat: 40.7032, lng: -74.0042, weight: 20 },
//   { lat: 40.7198, lng: -74.0024, weight: 20 },
//   { lat: 41.7223, lng: -74.0053, weight: 20 },
//   { lat: 40.7181, lng: -74.0042, weight: 20 },
//   { lat: 40.7124, lng: -74.0023, weight: 20 },
//   { lat: 40.7648, lng: -74.0012, weight: 20 },
//   { lat: 41.7128, lng: -74.0027, weight: 20 },
//   { lat: 40.7223, lng: -74.0153, weight: 20 },
//   { lat: 40.7193, lng: -74.0052, weight: 20 },
//   { lat: 40.7241, lng: -75.0013, weight: 20 },
//   { lat: 41.7518, lng: -74.0085, weight: 20 },
//   { lat: 40.7599, lng: -74.0093, weight: 20 },
//   { lat: 41.7523, lng: -74.0021, weight: 20 },
//   { lat: 40.7342, lng: -74.0152, weight: 20 },
//   { lat: 40.7484, lng: -75.0042, weight: 20 },
//   { lat: 40.7929, lng: -75.0023, weight: 20 },
//   { lat: 40.7292, lng: -74.0013, weight: 20 },
//   { lat: 40.794, lng: -74.0048, weight: 20 },
//   { lat: 40.7874, lng: -74.0052, weight: 20 },
//   { lat: 40.7824, lng: -74.0024, weight: 20 },
//   { lat: 40.7232, lng: -74.0094, weight: 20 },
//   { lat: 41.7342, lng: -74.0152, weight: 20 },
//   { lat: 41.7484, lng: -74.0012, weight: 20 },
//   { lat: 41.7929, lng: -74.0073, weight: 20 },
//   { lat: 41.7292, lng: -74.0013, weight: 20 },
//   { lat: 41.794, lng: -74.0058, weight: 20 },
//   { lat: 41.7874, lng: -74.0352, weight: 20 },
//   { lat: 41.7824, lng: -74.0024, weight: 20 },
//   { lat: 41.7232, lng: -74.0094, weight: 20 },
//   { lat: 41.0342, lng: -75.0152, weight: 20 },
//   { lat: 41.0484, lng: -75.0012, weight: 20 },
//   { lat: 41.0929, lng: -75.0073, weight: 20 },
//   { lat: 41.0292, lng: -74.0013, weight: 20 },
//   { lat: 41.094, lng: -74.0068, weight: 20 },
//   { lat: 41.0874, lng: -74.0052, weight: 20 },
//   { lat: 41.0824, lng: -74.0024, weight: 20 },
//   { lat: 41.0232, lng: -74.0014, weight: 20 }
// ];

// const AnyReactComponent = ({ text }) => (
//   <div
//     style={{
//       color: "white",
//       background: "grey",
//       padding: "15px 10px",
//       display: "inline-flex",
//       textAlign: "center",
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: "100%",
//       transform: "translate(-50%, -50%)"
//     }}
//   >
//     {text}
//   </div>
// );

// class SimpleMap extends React.Component {
//   static defaultProps = {
//     center: { lat: 59.95, lng: 30.33 },
//     zoom: 11
//   };

//   render() {
//     return (
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyBzMU8Sce5illSkT0uXrZgEN7rqAoW1hNI" }}
//         defaultCenter={{ lat: 41.0232, lng: -74.0014 }}
//         defaultZoom={11}
//         heatmapLibrary={true}
//         heatmap={{data:heatmapData}}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text={"Kreyser Avrora"}
//         />
//       </GoogleMapReact>
//     );
//   }
// }

// ReactDOM.render(
//   <div style={{ width: "100%", height: "400px" }}>
//     <SimpleMap />
//   </div>,
//   document.getElementById("root")
// );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
