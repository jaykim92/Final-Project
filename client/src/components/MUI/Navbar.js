import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { FIND_LOCATION } from "../../utils/actions";
import { useAppContext } from "../../utils/GlobalState";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "red"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navBrand: {
    color: "black",
    fontSize: "1.5rem",
    fontWeight: "bold"
  },
  navIcon: {
    maxWidth: "35px",
    marginRight: "10px"
  },
  loginBtn: {
    float: "right",
    color: "lime"
  },
  locate: {
      // height:"40px",
      //   position:"absolute",
      //   right: "10%"
      float: "right"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, dispatch] = useAppContext();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img src="./DrakeYes3.jpg" className={classes.navIcon}></img>
          <Link className={classes.navBrand} to="/">
            Anti - Social Social
          </Link>
          <Typography variant="h6" className={classes.title}>
            <Button
              className={classes.locate}
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
              Find Me {`-->`} <img
                style={{ height: "20px" }}
                src="/compass.svg"
                alt="compass"
              />
            </Button>
            <Button color="inherit" className={classes.loginBtn}>
              Login
            </Button>
            <Button color="inherit" className={classes.loginBtn}>
              Sign Up
            </Button>
            <Button color="inherit" className={classes.loginBtn}>
              Resources
            </Button>
            
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// import React from 'react';

// function Navbar() {
//     const [state, dispatch] = useAppContext()

//   return (
//     <nav className="navbar">
//       <div className="navbar-inner">
//         <div className="navbar-logo">
//           <Link className="navbar-brand" to="/">
//             <img src="./DrakeYes3.jpg" style={{ maxWidth: "70px" }}></img>
//             Anti - Social Social
//           </Link>
//         </div>
//         <div className="navbar-list">
//           <ul className="navbar-ul">
//             <li className="navbar-item">
//               <Link className="navbar-link" to="/">
//                 <span>Resources</span>| <span id="login"> Login </span> |{" "}
//                   <span>Signup </span>
//               </Link>
//             </li>
//             <li>
//               <button
//                 className="locate"
//                 onClick={() => {
//                   navigator.geolocation.getCurrentPosition(
//                     (position) => {
//                       dispatch({
//                         type: FIND_LOCATION,
//                         payload: {
//                           lat: position.coords.latitude,
//                           lng: position.coords.longitude
//                         }
//                       });
//                     },
//                     () => null
//                   );
//                 }}
//               >
//                 <img src="/compass.svg" alt="compass" />
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
