import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "../context/Auth";

const PrivateRoute = ({ component, reRouteComponent, ...options }) => {
  const { currentUser } = useContext(AuthContext);
  const finalComponent = currentUser ? component : reRouteComponent;

  return <Route {...options} component={finalComponent} />;
};

export default PrivateRoute