import React from 'react';
import {Link} from "react-router-dom";
import {FIND_LOCATION} from '../../utils/actions'
import "./styles.css";
import {useAppContext} from '../../utils/GlobalState'


function Navbar() {
    const [state, dispatch] = useAppContext()

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
        <img src="./DrakeYes3.jpg" style={{ maxWidth: "70px", marginRight: "15px" }}></img>
          <Link className="navbar-brand" to="/">
<<<<<<< HEAD
<<<<<<< HEAD
            <img src="./DrakeYes3.jpg" style={{ maxWidth: "70px" }}></img>
            Anti - Social Social
=======
             Anti - Social Social
>>>>>>> 2f33a32dd71df18d80d1bc4c608d79b371134e67
=======

            <img src="./DrakeYes3.jpg" style={{ maxWidth: "70px" }}></img>
            Anti - Social Social

>>>>>>> 80286d537def3720b3e9d3de73e14f1a161cfb29
          </Link>
        </div>
        <div className="navbar-list">
          <ul className="navbar-ul">
            <li className="navbar-item">
<<<<<<< HEAD
<<<<<<< HEAD
              <Link className="navbar-link" to="/">
                <span>Resources</span>| <span id="login"> Login </span> |{" "}
                  <span>Signup </span>
=======
              <Link className="navbar-link" to="/login">
                Login | Signup
>>>>>>> 2f33a32dd71df18d80d1bc4c608d79b371134e67
=======

              <Link className="navbar-link" to="/">
                <span>Resources</span>| <span id="login"> Login </span> |{" "}
                  <span>Signup </span>

>>>>>>> 80286d537def3720b3e9d3de73e14f1a161cfb29
              </Link>
            </li>
            <li>
              <button
                className="locate"
                onClick={() => {
                  navigator.geolocation.getCurrentPosition(
                    (position) => {
                      dispatch({
                        type: FIND_LOCATION,
                        payload: {
                          lat: position.coords.latitude,
                          lng: position.coords.longitude
                        }
                      });
                    },
                    () => null
                  );
                }}
              >
                <img src="/compass.svg" alt="compass" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;