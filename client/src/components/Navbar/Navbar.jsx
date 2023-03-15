import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { googleLogout } from "@react-oauth/google";

import useStyles from "./styles";
import memories from "../../images/memories.png";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../contstants/actionTypes";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: LOGOUT }, googleLogout());

    setUser(null);

    history.push("/");
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h4"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="80"
        />
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user?.given_name}
                src={user?.picture}
              >
                {user?.given_name || user?.result.name.charAt(0).toUpperCase()}
              </Avatar>
              <Typography className={classes.userName} variant="h6">
                {user?.given_name || user?.result.name}
              </Typography>
              <Button
                variant="contained"
                className={classes.logout}
                color="secondary"
                onClick={logout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          )}
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Navbar;
