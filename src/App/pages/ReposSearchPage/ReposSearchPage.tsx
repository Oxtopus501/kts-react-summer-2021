import React, { ReactType } from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import RepoTile from "@components/RepoTile/RepoTile";
import SearchIcon from "@components/SearchIcon";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { RepoItem } from "src/store/GitHubStore/types";

import { ApiResponse } from "../../../shared/store/ApiStore/types";
import GitHubStore from "../../../store/GitHubStore";

type ReposContext = { list?: RepoItem[]; isLoading: boolean; load: () => void };

function ReposSearchPage() {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [repoList, setRepoList] = React.useState<Array<RepoItem>>();
  const [isLoading, setIsLoading] = React.useState(false);
  /*React.useEffect(() => {
    renderReply(repoList);
  }, [repoList]);*/
  const ReposContext = React.createContext<ReposContext>({
    list: repoList,
    isLoading: false,
    load: () => {},
  });

  const Provider = ReposContext.Provider;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  /*const renderReply = (reply: Array<any> | undefined) => {
    if (repoList) {
      <>
        {repoList.map((repo) => {
          return (
            <RepoTile
              key={repo.id}
              title={repo.name}
              organization={repo.owner.login}
              starCounter={repo.stargazers_count}
              updated={repo.updated_at}
            />
          );
        })}
      </>;
    }
  };*/

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const gitHubStore = new GitHubStore();
    setIsLoading(true);
    gitHubStore
      .getOrganizationReposList({
        organizationName: inputValue,
      })
      .then((result: ApiResponse<RepoItem[], any>) => {
        if (result.success) {
          setRepoList(result.data);
          // eslint-disable-next-line no-console
          //console.log(result.data);
        }
        //handleReply(result.data);
        //setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <form className="search-form">
        <Input
          placeholder={"Введите название организации"}
          onChange={handleChange}
          value={inputValue}
        />
        <Button
          children={<SearchIcon />}
          onClick={handleClick}
          disabled={isLoading}
        />
      </form>
      <div className="repo-list">
        {repoList
          ? repoList.map((repo) => {
              return (
                <Link
                  to={`/repos/${repo.id}`}
                  style={{ textDecoration: "none", width: 357 }}
                >
                  <RepoTile
                    key={repo.id}
                    title={repo.name}
                    organization={repo.owner.login}
                    starCounter={repo.stargazers_count}
                    updated={repo.updated_at}
                    avatar={repo.owner.avatar_url}
                  />
                </Link>
              );
            })
          : null}
      </div>
    </>
  );
}

export default ReposSearchPage;
