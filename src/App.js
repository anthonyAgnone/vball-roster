import React, { createContext, useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import TeamReducer from "./context/TeamReducer";
import AppReducer from "./context/AppReducer";
import PlayerForm from "./components/playerForm/PlayerForm";
import "./global.css";

export const TeamDispatch = createContext(null);
export const AppDispatch = createContext(null);

const App = () => {
  const [team, teamDispatch] = useReducer(TeamReducer, {
    teamName: "",
    players: [
      {
        name: "Anthony",
        id: "0",
        gender: "m",
        position: "s",
        swappable: false,
        str: "",
        weak: ""
      }
    ]
  });
  const [app, appDispatch] = useReducer(AppReducer, {
    user: "",
    isOpen: false
  });

  return (
    <div className="app">
      <AppDispatch.Provider value={appDispatch}>
        <TeamDispatch.Provider value={teamDispatch}>
          <PlayerForm app={app} />
          <Switch>
            <Route path="/" exact>
              {({ match }) => <Home team={team} show={match !== null} />}
            </Route>
          </Switch>
        </TeamDispatch.Provider>
      </AppDispatch.Provider>
    </div>
  );
};

export default App;
