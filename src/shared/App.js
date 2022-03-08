import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import UserNickname from "../components/UserNickname";
import UserCategory from "../components/UserCategory";

function App(props) {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<UserNickname />} />
        <Route path="/category" element={<UserCategory />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
