import React, { createContext, useContext } from "react";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import { ApiResponse } from "../shared/store/ApiStore/types";
import GitHubStore from "../store/GitHubStore/";
import { RepoItem } from "../store/GitHubStore/types";
import style from "./App.module.scss";
import Repo from "./pages/Repo/";
import ReposSearchPage from "./pages/ReposSearchPage/";

type ReposContextT = {
  repoList?: RepoItem[];
  isLoading: boolean;
  load: () => void;
  inputValue: string;
  changeValue(arg: string): void;
};

export const ReposContext = createContext<ReposContextT>({
  repoList: [],
  isLoading: false,
  load: () => {},
  inputValue: "",
  changeValue: () => {},
});

const Provider = ReposContext.Provider;

export const useReposContext = () => useContext(ReposContext);

function App() {
  const [repoList, setRepoList] = React.useState<RepoItem[]>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState<string>("");

  const changeValue = (value: string) => {
    setInputValue(value);
  };

  const load = () => {
    const gitHubStore = new GitHubStore();
    setIsLoading(true);
    gitHubStore
      .getOrganizationReposList({
        organizationName: inputValue,
      })
      .then((result: ApiResponse<RepoItem[], any>) => {
        if (result.success) {
          setRepoList(result.data);
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <BrowserRouter>
      <Switch>
        <Provider
          value={{ repoList, isLoading, load, inputValue, changeValue }}
        >
          <Route exact path="/repos" component={ReposSearchPage} />
          <Route path="/repos/:id" component={Repo} />
          <Redirect to="/repos" />
        </Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
