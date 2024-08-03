"use client";

import React, { useState } from 'react';

const Table = ({ header, data }) => {
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const handleEditClick = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  return (
    <div className="relative ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {header.map((col, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {col}
              </th>
            ))}
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {header.map((col, colIndex) => (
                <td key={colIndex} className="px-6 py-4">
                  {row[col.toLowerCase().replace(/ /g, "_").replace(/&/g, "and")]}
                </td>
              ))}
              <td className="px-6 py-4 text-right relative">
                <button
                  onClick={() => handleEditClick(rowIndex)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &#x22EE;
                </button>
                {dropdownVisible === rowIndex && (
                  <div className="absolute -left-8 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Delivered
                      </button>
                      <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Confirmed
                      </button>
                      <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Pending
                      </button>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
