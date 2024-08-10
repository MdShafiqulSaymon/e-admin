"use client";
import { useState } from "react";
import { FaChevronDown } from 'react-icons/fa'; 
const SelectDropDown = ({ options ,selectedOption,setSelectedOption,placeHolder}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (address) => {
    setSelectedOption(address);
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
          value={selectedOption}
          readOnly
          className="bg-inherit flex-grow focus:outline-none"
          placeholder={placeHolder}
        />
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <FaChevronDown className="text-gray-500" />
          </div>
      {isOpen && (
        <ul
          className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
          onMouseEnter={() => setIsOpen(true)}
        >
          {options.map((address, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-blue-500 cursor-pointer"
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

export default SelectDropDown;
