import React, { useContext } from "react";
import PlayerForm from "./PlayerForm";
import { OnBench, OnCourt, Player } from "./assets/StyledElements";
import TeamDispatch from "../../App";

const Home = ({ team: { teamName, players } }) => {
  const dispatch = useContext(TeamDispatch);

  const handleDelete = i => {
    dispatch({ type: "REMOVE_TODO", payload: i });
  };

  const handleRotate = () => {
    dispatch({ type: "ROTATE_PLAYERS", payload: "" });
  };

  return (
    <div>
      <h1>{teamName ? teamName : "Enter Team Name"}</h1>

      <PlayerForm />

      <h1>On Court</h1>
      <OnCourt>
        {players.slice(0, 5).map((player, i) => (
          <Player key={i} swappable={player.swappable} id={player.id}>
            <p>{player.name}</p>
            <p>Gender: {player.gender}</p>
            <button onClick={() => handleDelete(i)}>Removeplayer</button>
          </Player>
        ))}
      </OnCourt>
      <OnBench>
        <h2>On Bench</h2>
        {players.slice(6, players.length - 1).map((player, i) => (
          <Player key={i} swappable={player.swappable}>
            <p>{player.name}</p>
            <p>{player.gender}</p>
          </Player>
        ))}
      </OnBench>

      <div>
        <button onClick={handleRotate}>Rotate Players</button>
      </div>
    </div>
  );
};

export default Home;
