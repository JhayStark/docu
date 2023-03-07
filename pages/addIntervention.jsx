import Image from "next/image";
import Link from "next/link";
import React from "react";

const AddIntervention = () => {
  return (
    <div className="flex flex-col justify-center w-3/5 gap-5 py-5 mx-auto ">
      <div className="flex justify-between gap-3">
        <Link
          href="/myInterventions"
          className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          View Interventions
        </Link>
        <Link
          href="/"
          className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Go Home
        </Link>
      </div>
      <h1 className="text-xl font-semibold">
        Only 7-star Pharmacists Lead Interventions. Kudos!!
      </h1>
      <Image
        src="https://res.cloudinary.com/jhay/image/upload/v1678194677/docu-pharma/intervention-img_d8pphl.png"
        alt="logo"
        width={800}
        height={600}
      />
      <form className="flex flex-col gap-7">
        <div className="flex flex-col justify-between gap-3 md:flex-row">
          <div>
            <label htmlFor="pharmacy">
              Where Did You Record This Intervention?
            </label>
            <select name="pharmacy" id="" className="w-full p-2 rounded">
              <option value="Trober">Trober</option>
            </select>
          </div>
          <div>
            <label htmlFor="date">When Did You Record This Intervention?</label>
            <select name="date" id="" className="w-full p-2 rounded">
              <option value="02/02/2023">02/02/2023</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="care">Select The Pharmaceutical Care</label>
          <select name="care" id="" className="p-2 rounded">
            <option value="">1</option>
            <option value="">1</option>
            <option value="">1</option>
            <option value="">1</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="care">Provide More Details</label>
          <select name="care" id="" className="p-2 rounded">
            <option value="">1</option>
            <option value="">1</option>
            <option value="">1</option>
            <option value="">1</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="care">Select Medications Involved</label>
          <select name="care" id="" className="p-2 rounded">
            <option value="">1</option>
            <option value="">1</option>
            <option value="">1</option>
            <option value="">1</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="care">What Was Your Intervention</label>
          <select name="care" id="" className="p-2 rounded">
            <option value="">1</option>
            <option value="">1</option>
            <option value="">1</option>
            <option value="">1</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="care">Provide More Details</label>
          <textarea name="care" id="" className="p-2 rounded h-44"></textarea>
        </div>
        <button className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default AddIntervention;
