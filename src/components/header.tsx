"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaCog } from "react-icons/fa"; // Settings icon
import { IoIosNotificationsOutline } from "react-icons/io"; // Notification icon

const Header = ({
  profileName = "John Doe",
  joinDate = "Joined: Jan 2023",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-between items-center p-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center space-x-4 ml-auto mr-5">
        {/* Profile Image with Shadow */}
        <div className="relative w-16 h-16 shadow-xl rounded-full">
          <Image
            src="/images/profile.jpg"
            alt="Profile Picture"
            className="rounded-full object-cover shadow-lg"
            fill
          />
        </div>

        {/* Profile Name and Join Date */}
        <div className="text-left text-xl mr-2">
          <p className="text-sm font-bold text-gray-700">{profileName}</p>
          <p className="text-xs text-gray-700 font-normal">{joinDate}</p>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-2">
          <button
            className="p-2 rounded-md text-black hover:bg-gray-200 focus:outline-none"
            aria-label="Notifications"
          >
            <IoIosNotificationsOutline className="w-8 h-8" />
          </button>

          {/* Settings Icon */}
          <button
            className="p-2 rounded-md text-black hover:bg-gray-200 focus:outline-none"
            aria-label="Settings"
          >
            <FaCog className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
