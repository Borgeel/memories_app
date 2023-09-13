import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.authData,
});

export default connect(mapStateToProps)(PrivateRoute);
