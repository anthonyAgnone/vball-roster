import React, { createContext, useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import TeamReducer from "./context/TeamReducer";
import AppReducer from "./context/AppReducer";
import TeamManagement from "./components/teamManagement/TeamManagement";
import { currentTeam } from './components/teamManagement/teamSetup/team'

import GlobalStyle from "./GlobalStyle";

export const TeamDispatch = createContext(null);
export const AppDispatch = createContext(null);

const App = () => {
  const [team, teamDispatch] = useReducer(TeamReducer, currentTeam);
  const [app, appDispatch] = useReducer(AppReducer, {
    user: "",
    isOpen: false
  });

  return (
    <div className="app">
      <GlobalStyle />
      <AppDispatch.Provider value={appDispatch}>
        <TeamDispatch.Provider value={teamDispatch}>
          <TeamManagement team={team} app={app} />
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
