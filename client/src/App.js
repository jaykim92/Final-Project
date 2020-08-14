import React from 'react';
import './App.css';
// import Map from './components/map';
import SedMap from './components/SedMap/SedMap.js'
import Signup from './components/Auth/Signup.js';
import Login from './components/Auth/Login.js'
import MUINav from "./components/MUI/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AppProvider} from './utils/GlobalState';

function App() {
  return (

      <Router>

        <AppProvider>
          {/* <Nav/> */}
          <MUINav />
          <Switch>
            <Route exact path={["/", "/home"]} component={SedMap} />
            <Route exact path="/auth/signup" component={Signup} />
            <Route exact path="/auth/login" component={Login} />
          </Switch>
        </AppProvider>
      </Router>
   
  );
}

export default App;
