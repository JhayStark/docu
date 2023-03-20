import CategoryIcon from "@/public/svgs/CategoryIcon";
import Home from "@/public/svgs/HomeIcon";
import LogoutIcon from "@/public/svgs/LogoutIcon";
import ProfileIcon from "@/public/svgs/ProfileIcon";
import React from "react";

const MobileNavbar = () => {
  return (
    <nav className="fixed bottom-0 flex w-[100%] flex-row  text-[#0146E9] justify-between px-6 md:px-20 py-5 lg:py-3 shadow-md bg-white">
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <Home />
        <h1>Home</h1>
      </div>

      <div className="flex flex-col items-center justify-center cursor-pointer">
        <CategoryIcon />
        <h1>Interventions</h1>
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <ProfileIcon />
        <h1>Profile</h1>
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <LogoutIcon />
        <h1>Logout</h1>
      </div>
    </nav>
  );
};

export default MobileNavbar;
