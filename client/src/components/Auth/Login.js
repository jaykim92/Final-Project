import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { login } from "../../utils/API";
import { useAppContext } from "../../utils/GlobalState.js";
import { LOGIN_SUCCESS, PENDING } from "../../utils/actions";
import { lightBlue } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    marginTop: "5vh",
    borderRadius: "10px",
    width: "80vw",
    margin: "auto",
    backgroundColor: "#adcae6",
    padding: "30px"
  },
  textField: {
    width: "100%"
  },
  input: {
    backgroundColor: "white"
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
    password: ""
  });
  const [state, dispatch] = useAppContext();
  const [warningText, setWarningText] = useState("");

  const handleInputChange = ({ target: { name, value } }) => {
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ action: PENDING });
    //some API call to server and sign up
    login(userInfo).then(({ data }) => {
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    });
  };

  return (
    <>
      {state.user ? <Redirect to="/home" /> : ""}
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <p className={classes.warning}>{warningText}</p>
        <Grid container spacing={2} style={{marginBottom: "2rem"}}>
          <Grid item xs={12} lg={6}>
            <TextField
              id="outlined-secondary"
              label="email"
              name="email"
              onChange={handleInputChange}
              variant="outlined"
              className={classes.textField}
              InputProps={{
                className: classes.input
              }}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <TextField
              id="outlined-secondary"
              label="Password"
              name="password"
              type="password"
              onChange={handleInputChange}
              variant="outlined"
              className={classes.textField}
              InputProps={{
                className: classes.input
              }}
            />
          </Grid>

          <Grid item xs={12}>
          <Button
              variant="contained"
              type="submit"
              style={{ backgroundColor: "#193753", color: "white" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
