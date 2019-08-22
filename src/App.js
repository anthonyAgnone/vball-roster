import React, { createContext, useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import TeamReducer from "./context/TeamReducer";
import AppReducer from "./context/AppReducer";
import TeamManagement from "./components/teamManagement/TeamManagement";

import "./global.css";

export const TeamDispatch = createContext(null);
export const AppDispatch = createContext(null);

const App = () => {
  const [team, teamDispatch] = useReducer(TeamReducer, {
    teamName: "",
    offense: "i42",
    players: [
      {
        name: "Anthony",
        id: "1",
        gender: "m",
        position: "s",
        swappable: false,
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
        name: "Bridget",
        id: "3",
        gender: "f",
        position: "oh",
        swappable: false,
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
        name: "Jon",
        id: "5",
        gender: "m",
        position: "mh",
        swappable: true,
        str: "",
        weak: ""
      },
      {
        name: "Ted",
        id: "6",
        gender: "m",
        position: "oh",
        swappable: true,
        str: "",
        weak: ""
      },
      ,
      {
        name: "New Guy",
        id: "7",
        gender: "m",
        position: "mh",
        swappable: true,
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
