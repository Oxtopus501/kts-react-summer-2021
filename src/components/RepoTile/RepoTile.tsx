import React from "react";

import StarIcon from "@components/StarIcon";

import styles from "./repo-tile.module.scss";

export type RepoTileProps = {
  onClick?: (e: React.MouseEvent) => void;
  title: String;
  organization: String;
  starCounter: Number;
  updated: String;
  avatar: String;
};

const RepoTile: React.FC<RepoTileProps> = ({
  title,
  organization,
  starCounter,
  updated,
  avatar,
}) => {
  return (
    <div className={`${styles["repo-tile"]}`}>
      <div
        className={`${styles["repo-tile__image"]}`}
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className={`${styles["repo-tile__text-container"]}`}>
        <h2 className={`${styles["repo-tile__title"]}`}>{title}</h2>
        <p className={`${styles["repo-tile__org-link"]}`}>{organization}</p>
        <div className={`${styles["repo-tile__repo-info"]}`}>
          <div className={`${styles["repo-tile__star-icon"]}`}>
            <StarIcon />
          </div>
          <p className={`${styles["repo-tile__star-counter"]}`}>
            {starCounter}
          </p>
          <p className={`${styles["repo-tile__update-info"]}`}>{updated}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RepoTile);
