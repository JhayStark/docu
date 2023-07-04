import MobileNavbar from "@/components/MobileNavbar";
import React from "react";

const Details = () => {
  return (
    <div>
      <div className="px-5 pb-28 lg:px-48">
        <h1 className="mt-16 mb-12">Denis Mensahs File</h1>
        <div className="flex flex-row items-center">
          <div className="w-12 h-12 mr-2 bg-red-500 bg-center bg-cover rounded-full" />
          <p>Male</p>
        </div>
        <div className="flex flex-col gap-3 pt-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="patientName">Patient name:</label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              className="px-5 py-3 focus:outline-none bg-[#F0F0F0]"
              placeholder="Denis Mensah"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="interventionLocation">
              Where Did You Record This Intervention
            </label>
            <input
              type="text"
              id="interventionLocation"
              name="interventionLocation"
              className="px-5 py-3 focus:outline-none bg-[#F0F0F0]"
              placeholder="DSU Pharmaceuticals "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="interventionLocation">
              When Did You Record This Intervention
            </label>
            <input
              type="text"
              id="interventionDate"
              name="interventionDate"
              className="px-5 py-3 focus:outline-none bg-[#F0F0F0]"
              placeholder="20th January 2023"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="interventionLocation">Medications Involved</label>
            <input
              type="text"
              id="interventionLocation"
              name="interventionLocation"
              className="px-5 py-3 focus:outline-none bg-[#F0F0F0]"
              placeholder="Paracetamol, Metrolex F. etc"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="interventionLocation">
              What was your Intervention
            </label>
            <input
              type="text"
              id="interventionLocation"
              name="interventionLocation"
              className="px-5 py-3 focus:outline-none bg-[#F0F0F0]"
              placeholder="Changed paracetamol to Efpac"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="interventionLocation">Provide More Details</label>
            <textarea
              name="moreDetails"
              id="moreDetails"
              cols="30"
              rows="10"
              className="w-full h-36 bg-[#F0F0F0] px-5 py-3"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
            ></textarea>
          </div>
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Details;
