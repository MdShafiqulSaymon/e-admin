export default function Table({ data }) {
    return (
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-600 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-white dark:bg-gray-700 dark:text-gray-400 border-2 shadow-md">
            <tr>
              <th scope="col" className="px-6 py-3">
                Admin Google Email
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="bg-white border-b hover:bg-gray-200 text-black"
              >
                <td className="px-6 py-4">{row.email}</td>
                <td className="px-6 py-4">{row.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  