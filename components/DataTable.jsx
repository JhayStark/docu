import React from "react";

const DataTable = () => {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <p for="checkbox-all-search" className="pl-2">
                  Recoreded Date
                </p>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 w-28">
              Patient Name
            </th>
            <th scope="col" className="px-6 py-3">
              Intervention ID
            </th>
            <th scope="col" className="px-6 py-3">
              Pharmaceutical Care
            </th>
            <th scope="col" className="px-6 py-3">
              Interventions(s)
            </th>
            <th scope="col" className="px-6 py-3">
              Company
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 ">
              <div className="flex items-center w-28">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <p for="checkbox-table-search-1" className="pl-2">
                  2023-02-26
                </p>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Joel Edem Amenuvor
            </th>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">Ineffective Medication</td>
            <td className="px-6 py-4">Switch dosage form</td>
            <td className="px-6 py-4">Trober</td>
          </tr>
          <tr className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 ">
              <div className="flex items-center w-28">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <p for="checkbox-table-search-1" className="pl-2">
                  2023-02-26
                </p>
              </div>
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Joel Edem Amenuvor
            </th>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">Ineffective Medication</td>
            <td className="px-6 py-4">Switch dosage form</td>
            <td className="px-6 py-4">Trober</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
