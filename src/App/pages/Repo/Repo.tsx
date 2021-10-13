import React from "react";

import StarIcon from "@components/StarIcon";
import RepoItemStore from "@store/RepoItemStore/RepoItemStore";
import { useLocalStore } from "@utils/useLocalStore";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import styles from "./Repo.module.scss";

const Repo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const repoItemStore = useLocalStore(() => new RepoItemStore());
  React.useEffect(() => {
    repoItemStore.getRepoById(id);
  }, [repoItemStore, id]);

  return (
    <div>
      {
        // eslint-disable-next-line no-console
        console.log(repoItemStore.repo)
      }
      {repoItemStore.repo ? (
        <div className={`${styles["repo"]}`}>
          <div
            className={`${styles["repo__image"]}`}
            style={{
              backgroundImage: `url(${repoItemStore.repo.owner.avatarUrl})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className={`${styles["repo__text-container"]}`}>
            <h2 className={`${styles["repo__title"]}`}>
              {repoItemStore.repo.name}
            </h2>
            <p className={`${styles["repo__org-link"]}`}>
              Организация: {repoItemStore.repo.owner.login}
            </p>
            <div className={`${styles["repo__repo-info"]}`}>
              <div className={`${styles["repo__star-icon"]}`}>
                <StarIcon />
              </div>
              <p className={`${styles["repo__star-counter"]}`}>
                {repoItemStore.repo.stargazersCount}
              </p>
              <p className={`${styles["repo__update-info"]}`}>
                Обновлён &nbsp;
                {
                  //repoItemStore.repo.updatedAt
                  new Intl.DateTimeFormat("ru-RU", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  }).format(repoItemStore.repo.updatedAt)
                }
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default observer(Repo);
