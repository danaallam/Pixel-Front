import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (localStorage.getItem("user_token") !== null) {
            return <Component />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location },
                }}
              />
            );
          }
        }}
      />
    </>
  );
};

export default ProtectedRoutes;
