import React, { useCallback } from "react";
import app from "../base";
import { LogSignForm } from './StyledComponents'

const SignUp = ({ isActive, history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <h1>Sign up</h1>
      <LogSignForm onSubmit={handleSignUp}>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={!isActive} type="submit">Sign Up</button>
      </LogSignForm>
    </div>
  );
};

export default SignUp;