import Link from "next/link";
import { useEffect, useRef } from "react";
import { HiHome } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const sidebarData = [
  {
    icon: (
      <HiHome className="w-6 h-6 mr-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
    name: "Home",
    link: "/",
  },
  {
    icon: (
      <HiHome className="w-6 h-6 mr-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
    name: "My Interventions",
    link: "/myInterventions",
  },
  {
    icon: (
      <HiHome className="w-6 h-6 mr-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    ),
    name: "Profile",
    link: "/profile",
  },
];
const Sidebar = ({ setSidebarOpen, sidebarOpen }) => {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setSidebarOpen]);
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
        ref={ref}
        className={`${
          sidebarOpen
            ? `w-60 fixed bg-gray-50 dark:bg-gray-800 h-full md:h-[100vh] flex flex-col justify-between z-50`
            : `hidden`
        }`}
      >
        <ul className="px-5 py-10">
          {sidebarData.map((data, index) => (
            <Link href={data.link} key={index}>
              <li
                key={index}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {data.icon}
                {data.name}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex flex-col justify-center gap-3 px-2 py-5 dark:text-gray-400">
          <h1>Welcome to DocuPharm</h1>
          <p>The #1 Impact Tracker for Pharmacists</p>
          <Link
            href="/auth/login"
            className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
