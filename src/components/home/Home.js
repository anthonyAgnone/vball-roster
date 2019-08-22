import React, { useContext, useState } from "react";
import { OnBench, OnCourt, Player } from "./assets/StyledElements";
import { TeamDispatch } from "../../App";

const Home = ({ team: { teamName, players } }) => {
  const dispatch = useContext(TeamDispatch);

  const [state, changeState] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);

  const rotationTwo = [
    [
      { x: -20, y: 130 },
      { x: -150, y: 0 },
      { x: -290, y: 130 },
      { x: 0, y: -75 },
      { x: 160, y: 80 },
      { x: 150, y: 80 }
    ],
    [
      { x: -30, y: 80 },
      { x: 200, y: 0 },
      { x: -340, y: 0 },
      { x: 50, y: -50 },
      { x: 200, y: 80 },
      { x: 160, y: 80 }
    ]
  ];

  const handleUpdateState = val => {
    let initialState = [...state];
    switch (val) {
      case 0:
        initialState.forEach((el, i) => {
          el.x = 0;
          el.y = 0;
        });
        changeState(initialState);
        break;
      case 1:
        changeState(rotationTwo[0]);
        break;
      case 2:
        changeState(rotationTwo[1]);
        break;
      default:
        return val;
    }
  };

  const handleDelete = i => {
    dispatch({ type: "REMOVE_PLAYER", payload: i });
  };

  const handleRotate = () => {
    dispatch({ type: "ROTATE_PLAYERS", payload: "" });
    console.log(state[1].x);
  };

  const handlePosition = val => {
    switch (val) {
      case "s":
        return "Setter";
      case "mh":
        return "Middle Hitter";
      case "oh":
        return "Outside Hitter";
      default:
        return val;
    }
  };

  return (
    <div>
      <h1>{teamName ? teamName : "Enter Team Name"}</h1>

      <h1>On Court</h1>
      <OnCourt>
        {players.slice(0, 6).map((player, i) => (
          <Player
            key={i}
            swappable={player.swappable}
            id={player.id}
            position={player.position}
            style={{
              transform: `translate(${state[i].x}px, ${state[i].y}px)`
            }}>
            <button onClick={() => handleDelete(player.id)}>X</button>
            {player.name}, {player.gender}
            <p>{handlePosition(player.position)}</p>
          </Player>
        ))}
      </OnCourt>
      <OnBench>
        <h2>On Bench</h2>
        {players.slice(5, players.length - 1).map((player, i) => (
          <Player key={i} swappable={player.swappable}>
            <p>{player.name}</p>
            <p>{player.gender}</p>
          </Player>
        ))}
      </OnBench>

      <div>
        <button onClick={() => handleUpdateState(0)}>Positions Only</button>
        <button onClick={() => handleUpdateState(1)}>Pre Contact</button>
        <button onClick={() => handleUpdateState(2)}>On Contact</button>
        <button onClick={handleRotate}>Rotate Players</button>
      </div>
    </div>
  );
};

export default Home;
