import React, { ReactType, useContext } from "react";

import Button from "@components/Button";
import Input from "@components/Input";
import RepoTile from "@components/RepoTile/RepoTile";
import SearchIcon from "@components/SearchIcon";
import stylesRepoList from "@layouts/blocks/repo-list/repo-list.module.scss";
import stylesSearchForm from "@layouts/blocks/search-form/search-form.module.scss";
import ReposListStore from "@store/ReposListStore";
import rootStore from "@store/RootStore/instance";
import { Meta } from "@utils/meta";
import routes from "@utils/routesConfig";
import { observer, useLocalStore } from "mobx-react-lite";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const repoLink = routes.reposDetails;

function ReposSearchPage() {
  const reposListStore = useLocalStore(() => new ReposListStore());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    rootStore.setInputValue(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    reposListStore.getOrganizationReposList({
      organizationName: rootStore.inputValue,
    });
  };

  React.useEffect(() => {
    if (rootStore.inputValue !== "") {
      reposListStore.getOrganizationReposList({
        organizationName: rootStore.inputValue,
      });
    }
  }, []);

  return (
    <>
      <form className={`${stylesSearchForm["search-form"]}`}>
        <Input
          placeholder={"Введите название организации"}
          onChange={handleChange}
          value={rootStore.inputValue}
        />
        <Button
          children={<SearchIcon />}
          onClick={handleClick}
          disabled={reposListStore.meta === Meta.loading}
        />
      </form>
      <div className={`${stylesRepoList["repo-list"]}`}>
        {reposListStore.list.map((repo) => {
          return (
            <Link
              to={repoLink.create(repo.id)}
              style={{ textDecoration: "none", width: 357 }}
            >
              <RepoTile
                key={repo.id}
                title={repo.name}
                organization={repo.owner.login}
                starCounter={repo.stargazersCount}
                updated={repo.updatedAt}
                avatar={repo.owner.avatarUrl}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default observer(ReposSearchPage);
