import React, { useContext, useState, useEffect } from "react";
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
import { rotationOne, rotationTwo, rotationThree } from "../../util/i42Rotations";

const resetState = [
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 }
]

const Home = ({ team: { teamName, offense, players, playersOnBench } }) => {
  const dispatch = useContext(TeamDispatch);
  const [courtPositions, setCourtPositions] = useState([])

  const [state, changeState] = useState(resetState);

  const [rotation, setRotation] = useState(0);

  const isSetter = (el) => {
    return el.position === 's'
  }

  const findSetter = () => {
    return players.findIndex(isSetter)
  }

  useEffect(() => {
    //New effect for choosing the correct file based on incoming offense
    //probably need a new system of holding rotations. Json maybe
    const allRotations = [rotationOne, rotationTwo, rotationThree]
    setCourtPositions(allRotations[findSetter()])
    return
  }, [rotation])

  const resetPositions = () => {
    changeState(resetState)
  }

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
        {players && players.map((player, i) => (
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
          {playersOnBench && playersOnBench.map((player, i) => (
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
        <button onClick={() => resetPositions()}>Positions Only</button>
        <button onClick={() => changeState(courtPositions[0])}>Pre Contact</button>
        <button onClick={() => changeState(courtPositions[1])}>On Contact</button>
        <button onClick={handleRotate}>Rotate Players</button>
      </Controls>
    </div>
  );
};

export default Home;
