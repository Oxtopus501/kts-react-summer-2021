import React from "react";

import StarIcon from "@components/StarIcon";

import "./repo-tile.css";

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
    <div className="repo-tile">
      <div
        className="repo-tile__image"
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="repo-tile__text-container">
        <h2 className="repo-tile__title">{title}</h2>
        <p className="repo-tile__org-link">{organization}</p>
        <div className="repo-tile__repo-info">
          <div className="repo-tile__star-icon">
            <StarIcon />
          </div>
          <p className="repo-tile__star-counter">{starCounter}</p>
          <p className="repo-tile__update-info">{updated}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RepoTile);
