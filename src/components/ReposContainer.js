import React from "react";
import { Route } from "react-router-dom";

const ReposContainer = () => {
  return (
    <div className="reposContainer">
      <Route path="/overview" />
      <Route path="/repos" />
      <Route path="/followers" />
    </div>
  );
};

export default ReposContainer;