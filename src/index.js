import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './components/fontawesome'

// import { DragDropContextProvider } from "react-dnd";
// import HTML5Backend from "react-dnd-html5-backend";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
