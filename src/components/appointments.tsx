"use client";
import React from "react";
import { FaUser } from "react-icons/fa"; // Import a user icon from react-icons

const appointments = [
  {
    id: 1,
    picture: "./images/img.png",
    time: "10:30 AM",
    purpose: "Dental Checkup",
    userName: "John Doe",
    date: "2023-12-02",
  },
  {
    id: 2,
    picture: "./images/img.png",
    time: "12:00 PM",
    purpose: "Team Meeting",
    userName: "Jane Smith",
    date: "2023-12-02",
  },
  {
    id: 3,
    picture: "./images/img.png",
    time: "12:00 PM",
    purpose: "Team Meeting",
    userName: "Jane Smith",
    date: "2023-12-02",
  },
];

const TodaysAppointments = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-black">
        Today&#39;s Appointments
      </h2>
      <div className="flex flex-col gap-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex items-center justify-between border border-gray-300 rounded-lg p-4 shadow bg-[#101928]"
          >
            {/* Left Section: Picture and Appointment Info */}
            <div className="flex items-center gap-4">
              {/* Picture */}
              <img
                src={appointment.picture}
                alt={appointment.userName}
                className="w-20 h-20 rounded-md object-cover"
              />

              {/* Appointment Info */}
              <div>
                <p className="font-semibold text-sm text-[#ffffffd6]">
                  {appointment.time}
                </p>
                <p className="text-[#ffffff] text-xl font-semibold">
                  {appointment.purpose}
                </p>
                <p className="text-sm flex items-center gap-2 text-[#ffffffd6]">
                  {/* Person Icon */}
                  <FaUser className="text-[#ffffffd6]" />
                  <span className="font-bold">{appointment.userName}</span>
                </p>
              </div>
            </div>

            {/* Right Section: Date */}
            <div className="flex flex-col items-center min-w-[60px] text-right text-[#ffffff]">
              <p className="text-lg font-bold">
                {new Date(appointment.date).getDate()}
              </p>
              <p className="text-sm text-[#ffffffd6]">
                {new Date(appointment.date).toLocaleString("default", {
                  month: "short",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysAppointments;
