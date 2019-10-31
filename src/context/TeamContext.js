import React, { useState, useEffect, useContext } from 'react'
import { db } from '../base'
import { AuthContext } from "./Auth";

export const TeamContext = React.createContext()

export const TeamContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [team, setTeam] = useState({
    teamName: "",
    offense: "",
    players: [],
    playersOnBench: []
  })

  const changeName = changes => {
    setTeam({ ...team, teamName: changes })
  }

  const changeOffense = changes => {
    setTeam({ ...team, offense: changes })
  }

  const addPlayer = player => {
    if (team.players.length > 5) {
      const tempBenchPlayer = [...team.playersOnBench, player]
      setTeam({ ...team, playersOnBench: tempBenchPlayer })
      return
    }
    const tempPlayer = [...team.players, player]
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

  useEffect(() => {
    if (currentUser != null) db.collection("teams").doc(currentUser.uid).set(team)
    return
  }, [team])

  return (
    <TeamContext.Provider
      value={{
        team,
        changeName,
        addPlayer,
        removePlayer,
        removeBenchPlayer,
        reorderPlayers,
        rotatePlayers,
        setTeam,
        changeOffense
      }}>
      {children}
    </TeamContext.Provider>
  )
}