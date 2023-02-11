import Image from "next/image";
import React from "react";

const AddIntervention = () => {
  return (
    <div className="flex flex-col justify-center w-3/5 gap-5 py-5 mx-auto ">
      <div className="flex justify-between gap-3">
        <button className="bg-[#61BAE4] text-white hover:bg-[#087bab] p-2 rounded">
          View Interventions
        </button>
        <button className="bg-[#61BAE4] text-white hover:bg-[#087bab] p-2 rounded">
          Go Home
        </button>
      </div>
      <h1 className="text-xl font-semibold">
        Only 7-star Pharmacists Lead Interventions. Kudos!!
      </h1>
      <Image
        src="/images/intervention-img.png"
        alt=""
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
        <button className="bg-[#61BAE4] text-white hover:bg-[#087bab] p-2 rounded w-44">
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default AddIntervention;
