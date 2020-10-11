import React from "react";
import { GithubState } from './context/GithubContext';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <GithubState>
      <Hero />
    </GithubState> 
  );
};

export default App;
