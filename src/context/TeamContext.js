import React, { useState } from 'react'

export const TeamContext = React.createContext()

export const TeamContextProvider = ({ children }) => {
  const [team, setTeam] = useState({
    teamName: "",
    offense: "i42",
    players: [
      {
        name: "Bridget",
        id: "3",
        gender: "f",
        position: "oh",
        swappable: false,
        str: "",
        weak: ""
      },
      {
        name: "Anthony",
        id: "1",
        gender: "m",
        position: "s",
        swappable: true,
        str: "",
        weak: ""
      },
      {
        name: "Nephier",
        id: "2",
        gender: "m",
        position: "mh",
        swappable: true,
        str: "",
        weak: ""
      },
      {
        name: "Jon K",
        id: "5",
        gender: "m",
        position: "oh",
        swappable: true,
        str: "",
        weak: ""
      },

      {
        name: "Serena",
        id: "4",
        gender: "f",
        position: "s",
        swappable: false,
        str: "",
        weak: ""
      },

      {
        name: "Jon L",
        id: "6",
        gender: "m",
        position: "mh",
        swappable: true,
        str: "",
        weak: ""
      }
    ],
    playersOnBench: []
  })

  const changeTeam = changes => {
    setTeam(changes)
  }

  const addPlayer = player => {
    if (team.players.length > 5) {
      const tempBenchPlayer = [team.playersOnBench, player]
      setTeam({ ...team, playersOnBench: tempBenchPlayer })
      return
    }
    const tempPlayer = [team.players, player]
    setTeam({ ...team, players: tempPlayer })
  }

  const removePlayer = id => {
    setTeam({
      ...team,
      players: team.players.filter(value => value.id !== id)
    })
  }

  const removeBenchPlayer = id => {
    setTeam({
      ...team,
      players: team.playersOnBench.filter(value => value.id !== id)
    })
  }

  const reorderPlayers = players => {
    setTeam({ ...team, players: players })
  }

  const rotatePlayers = () => {
    let tempArray = [...team.players];
    tempArray.unshift(tempArray.pop());
    const rotateOut = tempArray[3];
    if (rotateOut.swappable && team.playersOnBench.length > 0) {
      const tempBenchArray = [...team.playersOnBench];
      const rotateIn = tempBenchArray[0];
      rotateIn.position = rotateOut.position;
      tempArray[3] = rotateIn;
      tempBenchArray.push(rotateOut);
      tempBenchArray.shift();
      setTeam({
        ...team, players: tempArray, playersOnBench: tempBenchArray
      })
    }
    setTeam({ ...team, players: tempArray })
  }

  return (
    <TeamContext.Provider
      value={{
        team,
        changeTeam,
        addPlayer,
        removePlayer,
        removeBenchPlayer,
        reorderPlayers,
        rotatePlayers
      }}>
      {children}
    </TeamContext.Provider>
  )
}