import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/Posts/PostDetails/PostDetails";
import PrivateRoute from "./components/Auth/PrivateRoute";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <BrowserRouter>
        <Container>
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/posts" />} />
            <PrivateRoute exact path="/posts" component={Home} />
            <PrivateRoute exact path="/posts/search" component={Home} />
            <PrivateRoute exact path="/posts/:id" component={PostDetails} />
            <Route exact path="/auth" component={Auth} />
          </Switch>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
