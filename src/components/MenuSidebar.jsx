import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faTachometerAlt,
  faTasks,
  faEnvelope,
  faAddressBook,
  faComments,
  faHandshake,
  faCog,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const MenuSidebar = () => {
  return (
    <div className="h-screen w-72 bg-gray-100 border-r border-gray-300 flex flex-col items-start p-4 font-poppins shadow-lg">
      <h1 className="text-2xl font-bold mb-3 border-b border-gray-300 w-full pb-2">
        SaaS Kit
      </h1>
      <div className="mt-4 flex flex-col items-start w-full">
        <FontAwesomeIcon icon={faUserCircle} size="2x" />
        <h2 className="text-lg font-semibold mt-2">John Doe</h2>
        <p className="text-sm text-gray-600">john.doe@example.com</p>
      </div>
      <ul className="mt-12 w-full">
        <MenuItem icon={faTachometerAlt} label="Dashboard" />
        <MenuItem icon={faTasks} label="Tasks" />
        <MenuItem icon={faEnvelope} label="Email" />
        <MenuItem icon={faAddressBook} label="Contacts" />
        <MenuItem icon={faComments} label="Chat" />
        <MenuItem icon={faHandshake} label="Deals" />
      </ul>
      <div className="border-b border-gray-300 w-full my-4"></div>
      <MenuItem icon={faCog} label="Settings" />
      <div className="mt-auto">
        <MenuItem icon={faBars} label="Toggle Sidebar" />
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label }) => {
  return (
    <li className="flex items-center w-full mb-2 text-gray-700 hover:bg-gray-200 px-2 py-1 rounded transition duration-200 ease-in">
      <FontAwesomeIcon icon={icon} className="mr-2" />
      <span>{label}</span>
    </li>
  );
};

export default MenuSidebar;
