"use client";
import { useState } from "react";
const AddressDropDown = ({ addresses ,selectedAddress,setSelectedAddress}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (address) => {
    setSelectedAddress(address);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="w-full flex items-center border rounded-md px-4 py-2 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <input
          type="text"
          value={selectedAddress}
          readOnly
          className="bg-inherit flex-grow focus:outline-none"
          placeholder="Select Address"
        />
      </div>
      {isOpen && (
        <ul
          className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
          onMouseEnter={() => setIsOpen(true)}
        >
          {addresses.map((address, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(address)}
            >
              {address}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressDropDown;
