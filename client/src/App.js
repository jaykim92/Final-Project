import React, { useEffect } from 'react';
import './App.css';
// import Map from './components/map';
import SedMap from './components/SedMap/SedMap.js'
import Signup from './components/Auth/Signup.js';
import Login from './components/Auth/Login.js'
import MUINav from "./components/MUI/Navbar";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {AppProvider} from './utils/GlobalState';
import Auth from "./modules/auth";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        Auth.isUserAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (

      <Router>

        <AppProvider>
          {/* <Nav/> */}
          <MUINav />
          <Switch>
            <Route exact path="/auth/signup" component={Signup} />
            <Route exact path="/auth/login" component={Login} />
            <PrivateRoute exact path={["/", "/home"]}>
              <SedMap/>
            </PrivateRoute>
          </Switch>
        </AppProvider>
      </Router>
   
  );
}

export default App;
