import React, { useContext } from "react";
import { TeamDispatch, AppDispatch } from "../../App";

import PlayerForm from "./playerForm/PlayerForm";
import TeamSetup from "./teamSetup/TeamSetup";

import { TeamDiv } from "./assets/StyledComponents";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faIdBadge, faVolleyballBall } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faIdBadge, faVolleyballBall);

const TeamManagement = ({ app, team }) => {
  const teamDispatchMain = useContext(TeamDispatch);
  const appDispatchMain = useContext(AppDispatch);

  const handleToggleOC = () => {
    appDispatchMain({
      type: "MENU_OPEN",
      payload: !app.isOpen
    });
  };

  return (
    <TeamDiv isOpen={app.isOpen}>
      <h1 className="menuOpen" onClick={handleToggleOC}>
        <FontAwesomeIcon icon="id-badge" />
      </h1>
      <TeamSetup dispatch={teamDispatchMain} team={team} />
      <PlayerForm dispatch={teamDispatchMain} />
    </TeamDiv>
  );
};

export default TeamManagement;
