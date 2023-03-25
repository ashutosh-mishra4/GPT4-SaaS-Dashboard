import React from "react";
import MenuSidebar from "./components/MenuSidebar";
import SearchBar from "./components/SearchBar";
import TaskSection from "./components/TaskSection";
import DealsChart from "./components/DealsChart";

function App() {
  return (
    <div className="h-screen w-screen flex flex-row">
      <MenuSidebar />
      <div className="flex flex-col w-full">
        <SearchBar />
        <div className="flex-1 flex">
          <TaskSection />
          <DealsChart />
        </div>
        {/* Your other main content components */}
      </div>
    </div>
  );
}

export default App;
