import React from "react";
import AppRouts from './components/routes/index'
import Topbar from "./components/topbar/Topbar";

import './assets/styles/main.scss'

function App() {
  return (
    <>
      <Topbar />
      <AppRouts />
    </>
  );
}

export default App;