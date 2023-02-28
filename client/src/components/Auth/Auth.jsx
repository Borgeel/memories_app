import React from "react";
import {
  Avatar,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import useStyles from "./styles";
import Input from "./Input";

const Auth = () => {
  const classes = useStyles();

  const isSignup = false;

  const submitHandler = () => {};

  const changeHandler = () => {};

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
                  name="firstName"
                  label="First Name"
                  changeHandler={changeHandler}
                  half
                />
              </>
            )}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
