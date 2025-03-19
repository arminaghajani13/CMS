import React from "react";
import MainContent from "./components/Layout/MainContent";
import Topbar from "./components/Layout/Topbar";
import Sidebar from "./components/Layout/Sidebar";


function App() {
  return (
    <>
      <Topbar />
      <div className="bodyStructure">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;