"use-client"
import React from 'react';

export default function Table({ header, data }) {
  return (
    <div className="relative overflow-x-auto rounded-md shadow-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-black uppercase bg-white border-b-2 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {header.map((head, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black">
              {header.map((head, colIndex) => (
                <td key={colIndex} className="px-6 py-4">
                  {row[head]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
