import React, { createContext, useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import TeamReducer from "./context/TeamReducer";

export const TeamDispatch = createContext(null);

const App = () => {
  const [team, teamDispatch] = useReducer(TeamReducer, {
    teamName: "",
    players: []
  });
  return (
    <div className="app">
      <TeamDispatch.Provider value={teamDispatch}>
        <Switch>
          <Route path="/" exact>
            {({ match }) => <Home team={team} show={match !== null} />}
          </Route>
        </Switch>
      </TeamDispatch.Provider>
    </div>
  );
};

export default App;
