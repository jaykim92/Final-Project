import React from 'react';
import './App.css';
// import Map from './components/map';
import SedMap from './components/SedMap/SedMap.js'
import Nav from './components/NavBar'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AppProvider} from './utils/GlobalState';

function App() {
  return <>
  <AppProvider>
 <Router>
    <Nav/><SedMap/>
  </Router>
  </AppProvider>
  
  </>
}

export default App;
