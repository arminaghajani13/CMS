import React from "react";
import AppRouts from './components/routes/index'
import Topbar from "./components/Layout/Topbar";
import Sidebar from "./components/Layout/Sidebar";

import './assets/styles/main.scss'

function App() {
  return (
    <>
      <Topbar />
      <div className="bodyStructure">
        <Sidebar />
        <AppRouts />
      </div>
    </>
  );
}

export default App;