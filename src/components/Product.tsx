"use client";

import React from "react";

// Top Products Component
const TopProducts = () => {
  const products = [
    { id: 1, name: "Manicure", services: 24, image: "./images/img.png" },
    { id: 2, name: "Pedicure", services: 20, image: "./images/img.png" },
    { id: 3, name: "Haircut", services: 15, image: "./images/img.png" },
  ];

  return (
    <div className="rounded-2xl p-4 shadow-md bg-white w-full ">
      <div className="m-5">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Top Product</h2>
          <select className="rounded-md p-2 text-gray-700">
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>

        {/* Product List */}
        <div className="flex flex-col gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 p-4 border-b-2"
            >
              {/* Left: Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 rounded-md object-cover"
              />
              {/* Right: Product Details */}
              <div className="flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.services} Services</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Top Team Members Component
const TopTeamMembers = () => {
  const members = [
    { id: 1, name: "Jane Doe", services: 30, image: "./images/img.png" },
    { id: 2, name: "John Smith", services: 25, image: "./images/img.png" },
    {
      id: 3,
      name: "Emily Johnson",
      services: 18,
      image: "./images/img.png",
    },
  ];

  return (
    <div className="rounded-2xl p-4 shadow-xl bg-white w-full">
      <div className="m-5">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Top Team Members</h2>
          <select className="rounded-md p-2 text-gray-700">
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>

        {/* Team Members List */}
        <div className="flex flex-col gap-4">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center gap-4 p-4 border-b-2"
            >
              {/* Left: Team Member Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-md object-cover"
              />
              {/* Right: Team Member Details */}
              <div className="flex justify-between items-center w-full">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.services} Services</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Section Component
const TopProductsAndTeamMembers = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Top Products */}
      <div className="w-full lg:w-1/2">
        <TopProducts />
      </div>

      {/* Top Team Members */}
      <div className="w-full lg:w-1/2">
        <TopTeamMembers />
      </div>
    </div>
  );
};

export default TopProductsAndTeamMembers;
