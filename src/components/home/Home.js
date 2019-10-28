import React, { useContext, useState } from "react";
import {
  OnBench,
  OnCourt,
  Player,
  BenchList,
  BenchPlayer,
  TeamInfo,
  Controls
} from "./assets/StyledElements";
import { TeamDispatch } from "../../App";
import { rotationOne, rotationTwo, rotationThree } from "../../util/Rotations";

const Home = ({ team: { teamName, offense, players, playersOnBench } }) => {
  const dispatch = useContext(TeamDispatch);

  const [state, changeState] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);

  const [rotation, setRotation] = useState(0);

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
        if (rotation === 0 || rotation === 3) changeState(rotationOne[0]);
        else if (rotation === 1 || rotation === 4) changeState(rotationTwo[0]);
        else changeState(rotationThree[0]);
        break;
      case 2:
        if (rotation === 0 || rotation === 3) changeState(rotationOne[1]);
        else if (rotation === 1 || rotation === 4) changeState(rotationTwo[1]);
        else changeState(rotationThree[1]);
        break;
      default:
        return val;
    }
  };

  const handleDelete = i => {
    dispatch({ type: "REMOVE_PLAYER", payload: i });
  };

  const handleBenchDelete = i => {
    dispatch({ type: "REMOVE_BENCH_PLAYER", payload: i });
  };

  const handleRotate = () => {
    dispatch({ type: "ROTATE_PLAYERS" });
    if (rotation === 5) setRotation(0);
    else setRotation(rotation + 1);
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

  const handleOffense = val => {
    switch (val) {
      case "i42":
        return "International 4-2";
      case "t42":
        return "Coming Soon";
      case "51":
        return "Coming Soon";
      case "62":
        return "Coming Soon";
      default:
        return val;
    }
  };

  const currentOffense = handleOffense(offense);

  return (
    <div>
      <TeamInfo>
        <h1>{teamName ? teamName : "Enter Team Name"}</h1>
        <h2>{currentOffense}</h2>
        <h3>Rotation {rotation + 1}</h3>
      </TeamInfo>

      <OnCourt>
        {players.map((player, i) => (
          <Player
            key={i}
            swappable={player.swappable}
            id={player.id}
            position={player.position}
            style={{
              transform: `translate(${state[i].x}px, ${state[i].y}px)`
            }}>
            <button onClick={() => handleDelete(player.id)}>X</button>
            <p>
              {player.name}, {player.gender}
            </p>
            <p>{handlePosition(player.position)}</p>
          </Player>
        ))}
      </OnCourt>
      <OnBench>
        <BenchList>
          {playersOnBench.map((player, i) => (
            <li key={i}>
              <BenchPlayer
                swappable={player.swappable}
                id={player.id}
                gender={player.gender}>
                <button onClick={() => handleBenchDelete(player.id)}>X</button>
                <p>
                  {player.name}, {player.gender}
                </p>
              </BenchPlayer>
            </li>
          ))}
        </BenchList>
      </OnBench>

      <Controls>
        <button onClick={() => handleUpdateState(0)}>Positions Only</button>
        <button onClick={() => handleUpdateState(1)}>Pre Contact</button>
        <button onClick={() => handleUpdateState(2)}>On Contact</button>
        <button onClick={handleRotate}>Rotate Players</button>
      </Controls>
    </div>
  );
};

export default Home;
