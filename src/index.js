import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { AppContextProvider } from "./contexts/AppContext";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
