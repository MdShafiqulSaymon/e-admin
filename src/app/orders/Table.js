"use client";

import React from 'react';

const header = [
  "ID",
  "Date",
  "Customer Name",
  "Items",
  "Phone Number",
  "Total Price",
  "Payment",
  "Status",
];


export default function Table({data}) {
  return (
    <div className="relative overflow-x-auto rounded-md shadow-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-600 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-white pl-2 dark:bg-gray-700 dark:text-gray-400 border-b-2">
          <tr>
            {header.map((head, index) => (
              <th scope="col" className="px-6 py-3" key={index}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="bg-white border-b hover:bg-gray-200 text-black"
            >
              <td className="px-6 py-4">{row.id}</td>
              <td className="px-6 py-4">{row.date}</td>
              <td className="px-6 py-4">{row.customer_name}</td>
              <td className="px-6 py-4">{row.items}</td>
              <td className="px-6 py-4">{row.phone_number}</td>
              <td className="px-6 py-4">{row.total_price}</td>
              <td className="px-6 py-4">{row.payment}</td>
              <td className="px-6 py-4">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
