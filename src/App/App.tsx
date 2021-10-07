import React, { createContext, useContext } from "react";

import rootStore from "@store/RootStore/instance";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { RepoItemModel } from "src/store/models/gitHub";

import style from "./App.module.scss";
import Repo from "./pages/Repo/";
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
