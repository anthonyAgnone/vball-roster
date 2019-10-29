import React, { useState } from 'react'
import Login from './Login';
import Signup from './Signup';
import { TabGroup, LoggedOut } from './StyledComponents'
import { withRouter } from 'react-router-dom';

const LogSign = ({ history }) => {
  const [isLog, setIsLog] = useState(true);
  return (
    <LoggedOut>
      <TabGroup>
        <button className={!isLog && 'active'} onClick={() => setIsLog(false)}>Sign Up</button>
        <button className={isLog && 'active'} onClick={() => setIsLog(true)}>Log In</button>
      </TabGroup>
      {
        isLog && <Login history={history} />
      }
      {
        !isLog && <Signup history={history} />
      }
    </LoggedOut>
  );
}

export default withRouter(LogSign);