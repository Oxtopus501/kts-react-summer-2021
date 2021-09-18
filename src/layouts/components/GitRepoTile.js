import React from 'react';
import star from '../../images/star.svg';

function GitRepoTile() {

    return(

        <div className="git-repo-tile">
            <div className="git-repo-tile__image"></div>
            <div className="git-repo-tile__text-container">
                <a className="git-repo-tile__title">kts-school-frontend</a>
                <a className="git-repo-tile__org-link">ktsstudio</a>
                <div className="git-repo-tile__repo-info">
                    <img className="git-repo-tile__star-icon" src={star} />
                    <p className="git-repo-tile__star-counter">123</p>
                    <p className="git-repo-tile__update-info">Updated 21 Jul</p>
                </div>
            </div>
        </div>
    );

}

export default GitRepoTile;