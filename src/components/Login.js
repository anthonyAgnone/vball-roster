import React, { useCallback, useContext } from "react";
import { Redirect } from "react-router";
import app from "../base.js";
import { LogSignForm } from './StyledComponents'
import { AuthContext } from "../context/Auth";

const Login = ({ isActive, history }) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      setCurrentUser(null)
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <LogSignForm onSubmit={handleLogin}>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={!isActive} type="submit">Log in</button>
      </LogSignForm>
    </div>
  );
};

export default Login;