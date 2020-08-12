import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Redirect} from "react-router-dom";
import { login } from "../../utils/API";
import {useAppContext} from "../../utils/GlobalState.js";
import {LOGIN_SUCCESS, PENDING} from "../../utils/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    marginTop: "5vh",
    borderRadius: "10px",
    width: "80vw",
    margin: "auto",
    backgroundColor: "#00203FFF",
    padding: "30px"
  },
  input: {
    backgroundColor: "#ADEFD1FF",
    width: "60%",
    marginLeft: "20%"
  },
  warning: {
    color: "red",
    textAlign: "center"
  }
}));

export default function LoginForm() {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [state, dispatch] = useAppContext()
  const [warningText, setWarningText] = useState("");

  const handleInputChange = ({ target: { name, value } }) => {
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    dispatch({action:PENDING});
      //some API call to server and sign up
      login(userInfo).then(({ data }) => {
        dispatch({ type: LOGIN_SUCCESS , payload: data})
      });
  };


  return (
    <>
    {state.user ? <Redirect to="/home"/> : ""}
    <form
      onSubmit={handleSubmit}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <p className={classes.warning}>{warningText}</p>
      <TextField
        id="outlined-secondary"
        label="email"
        name="email"
        onChange={handleInputChange}
        variant="outlined"
        className={classes.input}
      />

      <TextField
        id="outlined-secondary"
        label="Password"
        name="password"
        type="password"
        onChange={handleInputChange}
        variant="outlined"
        className={classes.input}
      />
      
   
      <Button variant="contained" type="submit" color="primary">
        Submit
      </Button>
    </form>
    </>
  );
}