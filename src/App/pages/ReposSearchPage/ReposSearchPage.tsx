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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const handleReply = (reply: Array<any>) => {
    setRepoList(reply);
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
                updated={repo.udated_at}
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
    const EXAMPLE_ORGANIZATION = inputValue;
    setIsLoading(true);
    gitHubStore
      .getOrganizationReposList({
        organizationName: EXAMPLE_ORGANIZATION,
      })
      .then((result: ApiResponse<RepoItem[], any>) => {
        // eslint-disable-next-line no-console
        console.log(result.data); // в консоли появится список репозиториев в ktsstudio
        handleReply(result.data);
        setIsLoading(false);
        // eslint-disable-next-line no-console
      });
  };

  return (
    <>
      <form className="search-form">
        <Input
          placeholder={"Введите название организации"}
          onChange={handleChange}
          value={inputValue}
        />
        <Button children={<SearchIcon />} onClick={handleClick} />
      </form>
      <div className="repo-list">
        <RepoTile
          title={"kts-summer"}
          organization={"kts"}
          starCounter={123}
          updated={"Вчера"}
        />
      </div>
    </>
  );
}

export default ReposSearchPage;
