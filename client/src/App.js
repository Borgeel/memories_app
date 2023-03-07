import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <BrowserRouter>
        <Container>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Auth} />
          </Switch>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
