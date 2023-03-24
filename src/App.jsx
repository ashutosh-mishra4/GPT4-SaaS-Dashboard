import React from "react";
import MenuSidebar from "./components/MenuSidebar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="h-screen w-screen flex flex-row">
      <MenuSidebar />
      <div className="flex flex-col w-full">
        <SearchBar />
        {/* Your main content component */}
      </div>
    </div>
  );
}

export default App;
