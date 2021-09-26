import React from "react";

import "./Repo.scss";

import StarIcon from "@components/StarIcon";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import RepoItemStore from "../../../store/RepoItemStore/RepoItemStore";

const Repo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const repoItemStore = useLocalStore(() => new RepoItemStore());
  React.useEffect(() => {
    repoItemStore.getRepoById(id);
  }, [repoItemStore, id]);

  return (
    <div>
      {repoItemStore.repo ? (
        <div className="repo">
          <div
            className="repo__image"
            style={{
              backgroundImage: `url(${repoItemStore.repo.owner.avatarUrl})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="repo__text-container">
            <h2 className="repo__title"> {repoItemStore.repo.name}</h2>
            <p className="repo__org-link">{repoItemStore.repo.owner.login}</p>
            <div className="repo__repo-info">
              <div className="repo__star-icon">
                <StarIcon />
              </div>
              <p className="repo__star-counter">
                {repoItemStore.repo.stargazersCount}
              </p>
              <p className="repo__update-info">
                {repoItemStore.repo.updatedAt}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default observer(Repo);
