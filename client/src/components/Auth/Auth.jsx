import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { AUTH } from "../../contstants/actionTypes";
import { signin, signup } from "../../actions/auth";
import { useDispatch } from "react-redux";
import useStyles from "./styles";

import Input from "./Input";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassoword: "",
};

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const history = useHistory();

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showPasswordHandler = () => {
    setShowPassword((prevState) => !prevState);
  };

  const switchMode = () => {
    setIsSignup((prevState) => !prevState);
  };

  const googleResponse = async (response) => {
    const token = response.credential;
    const result = jwt_decode(response?.credential);

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sing Up" : "Sing In"}</Typography>
        <form className={classes.form} onSubmit={submitHandler}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  changeHandler={changeHandler}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  changeHandler={changeHandler}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              changeHandler={changeHandler}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              changeHandler={changeHandler}
              type={showPassword ? "text" : "password"}
              showPasswordHandler={showPasswordHandler}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                changeHandler={changeHandler}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <GoogleLogin
                onSuccess={googleResponse}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </Grid>
            <Grid container justifyContent="center">
              <Grid item>
                <Button
                  type="button"
                  fullWidth
                  color="primary"
                  onClick={switchMode}
                >
                  {!isSignup
                    ? "Don't have an account yet? Sign up."
                    : "Already have an account? Sign in"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
