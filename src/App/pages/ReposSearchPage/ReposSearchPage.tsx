import React from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import RepoTile from "@components/RepoTile/RepoTile";
import SearchIcon from "@components/SearchIcon";
import ReactDOM from "react-dom";
import { RepoItem } from "src/store/GitHubStore/types";

import { ApiResponse } from "../../../shared/store/ApiStore/types";
import GitHubStore from "../../../store/GitHubStore";

function ReposSearchPage() {
  const [inputValue, setInputValue] = React.useState("");
  const [repoList, setRepoList] = React.useState<Array<any>>();
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    renderReply(repoList);
  }, [repoList]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const renderReply = (reply: Array<any> | undefined) => {
    if (repoList) {
      ReactDOM.render(
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
        </>,
        document.querySelector(".repo-list")
      );
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const gitHubStore = new GitHubStore();
    setIsLoading(true);
    gitHubStore
      .getOrganizationReposList({
        organizationName: inputValue,
      })
      .then((result: ApiResponse<RepoItem[], any>) => {
        setRepoList(result.data);
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
      <div className="repo-list"></div>
    </>
  );
}

export default ReposSearchPage;
