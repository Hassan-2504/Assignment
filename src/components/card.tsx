"use client";
import React from "react";

const Card = ({
  title = "Card Title",
  smallText = "Small text here",
  Icon, // This is the icon passed as a prop
}: {
  title?: string;
  smallText?: string;
  Icon: React.ComponentType<{ className?: string }>; // Ensure the Icon accepts className
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-70">
      {/* Increased shadow intensity */}
      <div className="flex items-center p-4 justify-between space-x-4">
        {/* Icon on the left */}
        <div className="flex-shrink-0">
          <Icon className="text-black w-8 h-8" /> {/* Pass className here */}
        </div>
        {/* Title on the right */}
        <div className="ml-4">
          <p className="font-normal text-3xl text-green-700">{title}</p>
        </div>
      </div>
      {/* Small text and image in one line */}
      <div className="flex items-center justify-between mt-4">
        {/* Small text */}
        <p className="text-lg font-semibold text-gray-700">{smallText}</p>

        {/* Image on the right */}
        <div className="ml-4">
          <img
            src="/images/vector.svg"
            alt="Description of the vector image" // Description for accessibility
            className="w-20 h-20 object-cover" // Ensure valid Tailwind CSS class
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
