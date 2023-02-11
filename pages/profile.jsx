import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[50vw]">
        <h1 className="mb-5 text-lg font-bold">Profile Details</h1>

        <form action="" className="p-5 border-2 border-[#d8dadd] rounded ">
          <div className="flex flex-col gap-2 px-2 py-5">
            <label
              htmlFor="firstName"
              className="text-lg font-medium text-gray-600"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              className="p-2 w-[95%] bg-[#f0f2f6]"
            />
          </div>
          <div className="flex flex-col gap-2 px-2 py-5">
            <label
              htmlFor="lastName"
              className="text-lg font-medium text-gray-600"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              className="p-2 w-[95%] bg-[#f0f2f6]"
            />
          </div>
          <div className="flex flex-col gap-2 px-2 py-5">
            <label
              htmlFor="gender"
              className="text-lg font-medium text-gray-600"
            >
              Gender
            </label>
            <select name="" id="" className="p-2 w-[95%] bg-[#f0f2f6]">
              <option value="Male">M</option>
              <option value="Female">F</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 px-2 py-5">
            <label
              htmlFor="status"
              className="text-lg font-medium text-gray-600"
            >
              Status
            </label>
            <select name="" id="" className="p-2 w-[95%] bg-[#f0f2f6]">
              <option value="Male">M</option>
              <option value="Female">F</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 px-2 py-5">
            <label
              htmlFor="status"
              className="text-lg font-medium text-gray-600 "
            >
              Registration Number (PA/HPA)
            </label>
            <select name="" id="" className="p-2 w-[95%] bg-[#f0f2f6]">
              <option value="Male">M</option>
              <option value="Female">F</option>
            </select>
          </div>
          <div className="mt-32">
            <h1 className="pb-16 text-lg font-medium text-gray-600 border-b-2">
              Add place(s) of work
            </h1>
            <div className="flex flex-row justify-between px-1 pt-5">
              <div className="flex flex-col w-full gap-2 ">
                <label htmlFor="" className="text-lg font-medium text-gray-600">
                  Company
                </label>
                <input type="text" className="w-[80%] p-2 bg-[#f0f2f6]" />
              </div>
              <div className="flex flex-col w-full gap-2 ">
                <label htmlFor="" className="text-lg font-medium text-gray-600">
                  Town
                </label>
                <input type="text" className="w-[80%] p-2 bg-[#f0f2f6]" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
