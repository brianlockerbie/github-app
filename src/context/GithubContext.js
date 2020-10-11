import React, { createContext, useState, useEffect } from 'react';

export const GithubContext = createContext();

export const GithubState = ({ children }) => {
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState(null);
    const [followers, setFollowers] = useState(null);
    const [overview, setOverview] = useState(null);
    const [search, setSearch] = useState('');
    const [error, setError] = useState('');

    const getData = () => {
        fetch(`https://api.github.com/users/${search}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.message){
              setUser(null);
              setRepos(null);
              setFollowers(null);
              setOverview(null);
              setError("User not found...")
            }
          });
    };

    return <GithubContext.Provider value={{}}>{children}</GithubContext.Provider>
};