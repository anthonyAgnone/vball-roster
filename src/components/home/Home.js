import React, { useContext, useState } from "react";
import {
  OnBench,
  OnCourt,
  Player,
  BenchList,
  BenchPlayer
} from "./assets/StyledElements";
import { TeamDispatch } from "../../App";

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

  const rotationOne = [
    [
      { x: -40, y: -20 },
      { x: -270, y: 150 },
      { x: -290, y: 150 },
      { x: -20, y: -50 },
      { x: 130, y: 70 },
      { x: 160, y: 70 }
    ],
    [
      { x: 500, y: -20 },
      { x: -340, y: 100 },
      { x: -340, y: 100 },
      { x: -20, y: -50 },
      { x: 130, y: 70 },
      { x: 160, y: 70 }
    ]
  ];

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

  const rotationThree = [
    [
      { x: 0, y: 140 },
      { x: 0, y: 140 },
      { x: 20, y: -15 },
      { x: 0, y: -60 },
      { x: 150, y: 70 },
      { x: 140, y: 70 }
    ],
    [
      { x: -40, y: 100 },
      { x: -40, y: 100 },
      { x: -130, y: 0 },
      { x: 0, y: -60 },
      { x: 150, y: 70 },
      { x: 140, y: 70 }
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
      <h1>{teamName ? teamName : "Enter Team Name"}</h1>
      <h2>{currentOffense}</h2>
      <h3>Rotation {rotation + 1}</h3>

      <h1>On Court</h1>
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
            {player.name}, {player.gender}
            <p>{handlePosition(player.position)}</p>
          </Player>
        ))}
      </OnCourt>
      <OnBench>
        <h2>On Bench</h2>
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
