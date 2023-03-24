import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="flex items-center h-16 w-full px-4 bg-white border-b border-gray-300 shadow-lg">
      <div className="relative flex-grow">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
        <input
          type="text"
          className="pl-10 pr-4 py-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Global Search"
        />
      </div>
      <div className="ml-4">
        <FontAwesomeIcon icon={faBell} size="lg" className="text-gray-600" />
      </div>
    </div>
  );
};

export default SearchBar;
