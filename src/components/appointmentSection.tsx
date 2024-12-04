"use client";
import React from "react";
import TodaysAppointments from "./appointments";
import CalendarDemo from "./calander";

const AppointmentsSection = () => {
  return (
    <div className="flex gap-8 p-4">
      {/* Calendar Section */}
      <div className="w-1/2">
        <CalendarDemo />
      </div>

      {/* Appointments Section */}
      <div className="w-1/2">
        <TodaysAppointments />
      </div>
    </div>
  );
};

export default AppointmentsSection;
