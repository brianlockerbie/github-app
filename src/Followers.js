import React, { useContext } from "react";
import { GithubContext } from "../context/GithubContext"

const Followers = () => {
  const { followers } = useContext(GithubContext);

  return (
    <>
      {followers && 
        followers.map((follow, index) => (
          <a
            key={index}
            href={follow.html+url}
            target="_blank"
            rel="noopener noreferrer"
            clasName="followersContainer"
          >
            <div className="followers">
                <img src={follow.avatar_url} alt="follower" />
                <p>{follow.login}</p>
            </div>
          </a>
        ))}
    </>
  );
};

export default Followers;