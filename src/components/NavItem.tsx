import React from "react";

const NavItem = ({
  icon: Icon,
  label,
  isSelected,
  onClick,
  isOpen,
}: {
  icon: React.ComponentType;
  label: string;
  isSelected: boolean;
  onClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-5 py-3 w-[85%] mx-auto text-left rounded-lg text-xl ${
        isSelected
          ? "bg-black text-white m-4"
          : "hover:bg-black hover:text-white text-gray-800 m-4"
      }`}
    >
      {/* Always show the icon */}
      <Icon className="mr-4 text-2xl" />

      {/* Conditionally show the label based on isOpen */}
      {isOpen && <span>{label}</span>}
    </button>
  );
};

export default NavItem;
