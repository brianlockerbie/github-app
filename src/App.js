import React from "react";
import { GithubState } from './context/GithubContext';
import './App.css';

function App() {
  return (
    <GithubState>
      <div className="App">
        <h1>Welcome</h1>
      </div>
    </GithubState> 
  );
};

export default App;
