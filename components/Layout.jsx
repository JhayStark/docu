import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="h-full bg-[#e8eaed]">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        className={`${
          sidebarOpen ? `lg:ml-60 lg:px-2 lg:pt-6` : `lg:pt-2 px-2`
        } `}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
