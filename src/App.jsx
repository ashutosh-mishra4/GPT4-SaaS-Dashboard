import React from "react";
import MenuSidebar from "./components/MenuSidebar";
import SearchBar from "./components/SearchBar";
import TaskSection from "./components/TaskSection";

function App() {
  return (
    <div className="h-screen w-screen flex flex-row">
      <MenuSidebar />
      <div className="flex flex-col w-full">
        <SearchBar />
        <TaskSection />
        {/* Your other main content components */}
      </div>
    </div>
  );
}

export default App;
