import MobileNavbar from "@/components/MobileNavbar";
import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="px-5 pb-20 lg:px-48">
        <div className="flex flex-row items-center pt-16">
          <div className="w-12 h-12 mr-2 bg-red-500 bg-center bg-cover rounded-full" />
          <p>Pharm. John Doe</p>
        </div>
        <p className="py-3">User Profile</p>
        <div className="flex flex-col gap-7">
          <input
            type="text"
            className="px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]"
            placeholder="Email"
          />
          <input
            type="text"
            className="px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]"
            placeholder="Phone Number"
          />
          <input
            type="text"
            className="px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]"
            placeholder="Gender"
          />
          <input
            type="text"
            className="px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]"
            placeholder="Place of work"
          />
          <input
            type="text"
            className="px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]"
            placeholder="Registration Number (PA/HPA)"
          />
          <input
            type="text"
            className="px-2 py-2 focus:outline-none bg-inherit border-b-2 border-[#A29E95]"
            placeholder="Work Status (eg. intern)"
          />

          <button className="mt-10 px-36 py-4 bg-inherit border-2 self-center border-[#A29E95]">
            Save
          </button>
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Profile;
