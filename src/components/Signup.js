import React, { useCallback, useContext } from "react";
import app from "../base";
import { LogSignForm } from './StyledComponents'
import { AuthContext } from "../context/Auth";


const SignUp = ({ isActive, history }) => {
  const { setCurrentUser } = useContext(AuthContext);
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    setCurrentUser(null)
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