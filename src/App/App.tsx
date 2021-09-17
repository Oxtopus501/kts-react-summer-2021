import React, { createContext } from "react";

import Repo from "@components/Repo";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import ReposSearchPage from "./pages/ReposSearchPage/";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/repos" component={ReposSearchPage} />
        <Route path="/repos/:id" component={Repo} />
        <Redirect to="/repos" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
