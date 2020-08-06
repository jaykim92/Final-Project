import React from 'react';
import './App.css';
// import Map from './components/map';
import SedMap from './components/SedMap/SedMap.js'
import Nav from './components/NavBar'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return <>
  <Router>
    <Nav/><SedMap/>
  </Router>
  
  </>
}

export default App;
