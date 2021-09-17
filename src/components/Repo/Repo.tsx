import React from "react";

import StarIcon from "@components/StarIcon";
import { useParams } from "react-router-dom";
import { ApiResponse } from "src/shared/store/ApiStore/types";
import { RepoItem } from "src/store/GitHubStore/types";

import GitHubStore from "../../store/GitHubStore";

/*export type RepoProps = {
  title: String;
  organization: String;
  starCounter: Number;
  updated: String;
};*/

const Repo: React.FC = () => {
  const [repoInfo, setRepoInfo] = React.useState({});
  const [name, setName] = React.useState("");
  const [starCounter, setStarCounter] = React.useState(0);
  const [owner, setOwner] = React.useState("");
  const [updated, setUpdated] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const { id } = useParams<{ id: string }>();
  const gitHubStore = new GitHubStore();
  gitHubStore.getRepoById(id).then((result: ApiResponse<RepoItem, any>) => {
    if (result.success) {
      // eslint-disable-next-line no-console
      console.log(result.data);
      setName(result.data.name);
      setStarCounter(result.data.stargazers_count);
      setOwner(result.data.owner.login);
      setUpdated(result.data.updated_at);
      setAvatar(result.data.owner.avatar_url);
    }
  });

  return (
    <div>
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
          <h2 className="repo-tile__title"> {name}</h2>
          <p className="repo-tile__org-link">{owner}</p>
          <div className="repo-tile__repo-info">
            <div className="repo-tile__star-icon">
              <StarIcon />
            </div>
            <p className="repo-tile__star-counter">{starCounter}</p>
            <p className="repo-tile__update-info">{updated}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repo;
