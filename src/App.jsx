import React from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="mainDisplay">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
