"use client";
import React, { useState } from "react";
import Sidebar from "@/components/sidebar"; // Sidebar component
import Header from "@/components/header"; // Header component
import { FaCalendarAlt, FaRegChartBar, FaRegUser } from "react-icons/fa"; // Importing icons
import Card from "@/components/card"; // Card component
import { Component } from "@/components/graph";
import AppointmentsSection from "@/components/appointmentSection";
import TopProductsAndTeamMembers from "@/components/Product";
import RecentAppointments from "@/components/RecentAppointments";

const Page = () => {
  const [isSidebarOpen] = useState(true); // Sidebar state (currently static)
  const userName = "Jane Doe"; // Replace with dynamic user data if available

  return (
    <div className="flex h-screen w-screen bg-[#F5F5F5]overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className="flex flex-col overflow-hidden">
        {/* Header */}
        <Header profileName={userName} joinDate="Joined: Mar 2021" />

        {/* Dashboard Content */}
        <main className="p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            {/* Personalized Greeting with bold username */}
            <h1 className="text-2xl text-gray-800">
              Good Morning, <span className="font-bold">{userName}</span>
            </h1>

            {/* New Appointment Button with Calendar Icon */}
            <button className="bg-[#101928] font-semibold text-white px-8 py-3.5 rounded-xl flex items-center space-x-4 hover:bg-gray-800 focus:outline-none">
              <FaCalendarAlt className="w-5 h-5" />
              <span>New Appointment</span>
            </button>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Card
              title="$1978"
              smallText="Total Revenue"
              Icon={FaRegChartBar}
            />
            <Card title="60" smallText="Total Users" Icon={FaRegUser} />
            <Card title="45" smallText="Active Projects" Icon={FaRegChartBar} />
          </div>

          {/* Graph Section */}
          <div className="mt-10">
            <Component />
          </div>

          {/* Appointments Section */}
          <div className="min-h-screen p-6">
            <AppointmentsSection />
            <div className="mt-10">
              <TopProductsAndTeamMembers />
            </div>
            <div className="mt-10">
              <RecentAppointments />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
