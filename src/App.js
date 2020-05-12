import React from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import "./App.css";

function App(props) {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
  );
}

export default App;
