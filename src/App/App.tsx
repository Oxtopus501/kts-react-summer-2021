import React, { createContext, useContext } from "react";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { RepoItemModel } from "src/store/models/gitHub";

import style from "./App.module.scss";
import Repo from "./pages/Repo/";
import ReposSearchPage from "./pages/ReposSearchPage/";

type ReposContextT = {
  repoList?: RepoItemModel[];
  isLoading: boolean;
  inputValue: string;
  changeValue(arg: string): void;
};

export const ReposContext = createContext<ReposContextT>({
  repoList: [],
  isLoading: false,
  inputValue: "",
  changeValue: () => {},
});

const Provider = ReposContext.Provider;

export const useReposContext = () => useContext(ReposContext);

function App() {
  const [repoList, setRepoList] = React.useState<RepoItemModel[]>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState<string>("");

  const changeValue = (value: string) => {
    setInputValue(value);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Provider value={{ repoList, isLoading, inputValue, changeValue }}>
          <Route exact path="/repos" component={ReposSearchPage} />
          <Route path="/repos/:id" component={Repo} />
          <Redirect to="/repos" />
        </Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
