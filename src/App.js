import React, { createContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from './components/landing/LandingPage'
import Home from "./components/home/Home";
import TeamManagement from "./components/teamManagement/TeamManagement";

import GlobalStyle from "./GlobalStyle";

import { AuthProvider } from "./context/Auth";
import { TeamContextProvider } from './context/TeamContext'
import { AppProvider } from "./context/AppContext";

export const AppDispatch = createContext(null);

const App = () => {

  return (
    <div className="app">
      <GlobalStyle />
      <AppProvider>
        <AuthProvider>
          <TeamContextProvider>
            <TeamManagement />
            <Router>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/home" component={Home} />
            </Router>
          </TeamContextProvider>
        </AuthProvider>
      </AppProvider>
    </div>
  );
};

export default App;
