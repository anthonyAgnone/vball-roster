import React, { useContext } from "react";
import { AppContext } from '../../context/AppContext'
import { AuthContext } from '../../context/Auth'
import app from '../../base'

import PlayerForm from "./playerForm/PlayerForm";
import TeamSetup from "./teamSetup/TeamSetup";

import { TeamDiv } from "./assets/StyledComponents";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faIdBadge, faVolleyballBall } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faIdBadge, faVolleyballBall);

const handleSignout = () => {
  app.auth().signOut()
}

const TeamManagement = () => {
  const { state, setState } = useContext(AppContext)
  const { currentUser } = useContext(AuthContext)

  return (
    <TeamDiv isOpen={state}>
      <h1 className="menuOpen" onClick={() => setState(!state)}>
        <FontAwesomeIcon icon="id-badge" />
      </h1>
      {currentUser && <React.Fragment>
        <TeamSetup />
        <PlayerForm />
        <button onClick={handleSignout}>Sign Out</button>
      </React.Fragment>}
      {!currentUser && <React.Fragment>
        <p>Login</p>
        <p>Sign Up</p>
      </React.Fragment>}
    </TeamDiv>
  );
};

export default TeamManagement;
