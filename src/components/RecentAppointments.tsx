"use client";

import Image from "next/image";
import React from "react";

const RecentAppointments = () => {
  const appointments = [
    {
      id: 1,
      employee: "Irtaza Zaidi 01",
      service: "Manicure",
      date: "2023-12-01", // Appointment date
      earnings: "$100.5",
      sale: "05",
      serviceImage: "./images/img.png", // Service image
    },
    {
      id: 2,
      employee: "Irtaza Zaidi 01",
      service: "Manicure",
      date: "2023-12-02",
      earnings: "$100.5",
      sale: "04",
      serviceImage: "./images/img.png",
    },
    {
      id: 3,
      employee: "Irtaza Zaidi 01",
      service: "Manicure",
      date: "2023-12-03",
      earnings: "$100.5",
      sale: "02",
      serviceImage: "./images/img.png",
    },
    {
      id: 4,
      employee: "Irtaza Zaidi 01",
      service: "Manicure",
      date: "2023-12-04",
      earnings: "$100.5",
      sale: "01",
      serviceImage: "./images/img.png",
    },
  ];

  return (
    <div className="rounded-xl p-6 shadow-md bg-white w-full">
      <h2 className="text-xl font-bold mb-6">Recent Appointments</h2>

      <div className="w-full">
        <div className="grid grid-cols-4 bg-gray-100 font-semibold rounded-lg text-gray-700 text-sm py-3 px-4 border-b">
          <div className="text-left">Service</div>
          <div className="text-left">Employee</div>
          <div className="text-center">Earnings</div>
          <div className="text-center">Sales</div>
        </div>

        {/* Table Rows */}
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="grid grid-cols-4 items-center text-sm text-gray-800 py-4 px-4 border-b"
          >
            {/* Service */}
            <div className="flex items-center gap-3">
              {/* Service Image */}
              <div className="flex-shrink-0">
                <Image
                  src={appointment.serviceImage}
                  alt={appointment.service}
                  className="w-12 h-12 rounded-md object-cover"
                />
              </div>
              {/* Service Text */}
              <div>
                <p className="font-semibold">{appointment.service}</p>
                <p className="text-gray-500 text-xs">{appointment.date}</p>
              </div>
            </div>

            {/* Employee */}
            <div className="text-left">{appointment.employee}</div>

            {/* Earnings */}
            <div className="text-center">{appointment.earnings}</div>

            {/* Sales */}
            <div className="text-center">
              <span className="bg-slate-100 text-blue-500 border rounded-sm px-2 py-1">
                {appointment.sale}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentAppointments;
