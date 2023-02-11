import { useState } from "react";
import { HiHome } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Sidebar = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <div>
      <div
        className={`${
          sidebarOpen ? `absolute left-[15rem] p-2 text-xl` : `p-2 text-xl`
        }`}
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        {setSidebarOpen ? <IoIosArrowForward /> : <IoIosArrowBack />}
      </div>
      <div
        className={`${
          sidebarOpen
            ? `w-60 fixed bg-gray-50 dark:bg-gray-800 h-[100vh] flex flex-col justify-between `
            : `hidden`
        }`}
      >
        <ul className="px-5 py-10">
          <li className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <HiHome className="w-6 h-6 mr-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            Home
          </li>

          <li className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <HiHome className="w-6 h-6 mr-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            My Profile
          </li>
          <li className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <HiHome className="w-6 h-6 mr-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            My Interventions
          </li>

          <li className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <HiHome className="w-6 h-6 mr-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            My Patients
          </li>
          <li className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <HiHome className="w-6 h-6 mr-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            My Days
          </li>
        </ul>
        <div className="flex flex-col justify-center gap-3 px-2 py-5 dark:text-gray-400">
          <h1>Welcome to DocuPharm</h1>
          <p>The #1 Impact Tracker for Pharmacists</p>
          <button className="w-20 p-2 text-white bg-blue-400 rounded ">
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
