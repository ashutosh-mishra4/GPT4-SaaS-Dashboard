import React from "react";
import MenuSidebar from "./components/MenuSidebar";
import SearchBar from "./components/SearchBar";
import TaskSection from "./components/TaskSection";
import Charts from "./components/Charts";

function App() {
  return (
    <div className="h-screen flex flex-row">
      <MenuSidebar />
      <div className="flex-1 flex flex-col">
        <SearchBar />
        <div className="flex-1 flex">
          <TaskSection />
          <Charts />
        </div>
        {/* Your other main content components */}
      </div>
    </div>
  );
}

export default App;
