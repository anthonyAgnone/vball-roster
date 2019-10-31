import React, { createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './components/landing/LandingPage'
import Home from "./components/home/Home";
import TeamManagement from "./components/teamManagement/TeamManagement";

import GlobalStyle from "./GlobalStyle";

import { AuthProvider } from "./context/Auth";
import { TeamContextProvider } from './context/TeamContext'
import { AppProvider } from "./context/AppContext";
import PrivateRoute from "./components/PrivateRoute";

export const AppDispatch = createContext(null);

const App = () => {

  return (
    <div className="app">
      <GlobalStyle />
      <AppProvider>
        <AuthProvider>
          <TeamContextProvider>
            <Router>
              <TeamManagement />
              <Switch>
                <PrivateRoute exact path="/" component={Home} reRouteComponent={LandingPage} />
                <Route path="/welcome" component={LandingPage} />
              </Switch>
            </Router>
          </TeamContextProvider>
        </AuthProvider>
      </AppProvider>
    </div>
  );
};

export default App;
