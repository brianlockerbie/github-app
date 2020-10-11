import React, { createContext, useState, useEffect } from 'react';

export const GithubContext = createContext();

export const GithubState = ({ children }) => {
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState(null);
    const [followers, setFollowers] = useState(null);
    const [overview, setOverview] = useState(null);
    const [search, setSearch] = useState('');
    const [error, setError] = useState('');


    return(
        <GithubContext.Provider value {{ }}>
            {children}
        </GithubContext.Provider>
    )
}