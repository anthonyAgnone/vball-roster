import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup';
import { TabGroup, LoggedOut } from './StyledComponents'
import { withRouter } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

const LogSign = ({ history }) => {
  const [isLog, setIsLog] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const onChange = (value) => {
    console.log("Captcha value:", value);
  }
  return (
    <LoggedOut>
      <TabGroup>
        <button className={!isLog && 'active'} onClick={() => setIsLog(false)}>Sign Up</button>
        <button className={isLog && 'active'} onClick={() => setIsLog(true)}>Log In</button>
      </TabGroup>
      {
        isLog && <Login isActive={isActive} history={history} />
      }
      {
        !isLog && <Signup isActive={isActive} history={history} />
      }
      <ReCAPTCHA
        sitekey="6LcOXsAUAAAAAD6KRsE2ZHnXvJRE58hjeLrBzIDt"
        onChange={onChange}
        size="compact"
      />
    </LoggedOut>
  );
}

export default withRouter(LogSign);