import React from 'react';
import './App.css';
// import Map from './components/map';
import SedMap from './components/SedMap/SedMap.js'
import Nav from './components/NavBar';
import MUINav from "./components/MUI/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AppProvider} from './utils/GlobalState';

function App() {
  return <>
  <AppProvider>
 <Router>
    {/* <Nav/> */}
    <MUINav/>
    <SedMap/>
  </Router>
  </AppProvider>
  
  </>
}

export default App;
