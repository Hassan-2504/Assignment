"use client"; // Required for Next.js app directory

import Image from "next/image";
import React, { useState } from "react";
import {
  FaHome,
  FaCog,
  FaUser,
  FaSignOutAlt,
  FaBell,
  FaChartBar,
  FaEnvelope,
  FaBook,
  FaCalendarAlt,
  FaFolder,
  FaLock,
  FaQuestionCircle,
  FaAlignLeft,
  FaAlignRight,
} from "react-icons/fa";
import NavItem from "./NavItem"; // Ensure NavItem is implemented correctly

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar toggle state
  const [selected, setSelected] = useState("Dashboard"); // Track selected menu item

  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  // Render only icons when the sidebar is closed
  const renderIconOnlyNavItems = () => (
    <>
      {menuItems.map((item) => (
        <li
          key={item.label}
          className={`flex justify-center items-center p-2 rounded-lg cursor-pointer transition-colors ${
            selected === item.label
              ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-gray-800 "
              : "hover:bg-indigo-50 text-gray-600"
          }`}
          onClick={() => setSelected(item.label)}
        >
          <item.icon className="w-6 h-6" />
        </li>
      ))}
    </>
  );

  // Sidebar menu items
  const menuItems = [
    { icon: FaHome, label: "Dashboard" },
    { icon: FaChartBar, label: "Analytics" },
    { icon: FaEnvelope, label: "Messages" },
    { icon: FaCalendarAlt, label: "Calendar" },
    { icon: FaFolder, label: "Projects" },
    { icon: FaBell, label: "Notifications" },
    { icon: FaCog, label: "Settings" },
    { icon: FaUser, label: "Profile" },
    { icon: FaBook, label: "Documentation" },
    { icon: FaLock, label: "Privacy" },
    { icon: FaQuestionCircle, label: "Help" },
    { icon: FaSignOutAlt, label: "Logout" },
  ];

  return (
    <div
      className={`${
        isOpen ? "min-w-[280px]" : "min-w-20" // Adjust w-20 for the closed state so icons are visible
      } h-screen bg-white text-gray-800 flex flex-col transition-all duration-300 overflow-y-auto`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 mt-4">
        {/* Logo Section */}
        {isOpen && (
          <div className="flex items-center">
            <Image
              src="/images/logo.svg" // Replace with your actual logo path
              alt="Logo"
              width={140}
              height={50}
              priority
            />
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded text-gray-800 hover:bg-gray-200"
          aria-label={isOpen ? "Collapse Sidebar" : "Expand Sidebar"}
        >
          {isOpen ? (
            <FaAlignRight className="w-6 h-6" />
          ) : (
            <FaAlignLeft className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Sidebar Navigation Menu */}
      <nav className="flex flex-col mt-4 space-y-1">
        <ul>
          {isOpen
            ? menuItems.map((item) => (
                <NavItem
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  isSelected={selected === item.label}
                  onClick={() => setSelected(item.label)}
                  isOpen={isOpen}
                />
              ))
            : renderIconOnlyNavItems()}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
