"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Table = ({ header, data }) => {
  const router = useRouter();

  const handleEditClick = (id) => {
    router.push(`/product/p-id=${id}`);
  };

  return (
    <div className="relative overflow-auto rounded-md shadow-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-md">
        <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400">
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
            <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black">
              {header.map((col, colIndex) => (
                <td key={colIndex} className="px-6 py-4">
                  {row[col.toLowerCase().replace(/ /g, "_").replace(/&/g, "and")]}
                </td>
              ))}
              <td className="px-6 py-4 text-right relative">
                <button
                  onClick={() => handleEditClick(row.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &#x22EE;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
