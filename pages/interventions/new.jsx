import MobileNavbar from "@/components/MobileNavbar";
import AddIntervention from "@/public/svgs/AddInterventionIcon";
import React from "react";

const New = () => {
  return (
    <div>
      <div className="px-5 pt-12 pb-28 lg:px-48">
        <div className="flex flex-row md:text-2xl items-center gap-2 text-[#0146E9] self-start mb-11 ">
          <AddIntervention />
          <p>Add Intervention</p>
        </div>{" "}
        <div className="flex flex-row items-center">
          <div className="w-12 h-12 mr-2 bg-red-500 bg-center bg-cover rounded-full" />
          <p>Male</p>
        </div>
        <div className="flex flex-col gap-3 pt-8">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              id="patientName"
              name="patientName"
              className="px-5 py-3 focus:outline-none bg-[#F0F0F0]"
              placeholder="Patient Name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              id="interventionLocation"
              name="interventionLocation"
              className="px-5 py-3 focus:outline-none bg-[#F0F0F0]"
              placeholder="Intervention Location"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              id="whenInterventionWasRecorded"
              name="whenInterventionWasRecorded"
              className="px-5 py-3 focus:outline-none bg-[#F0F0F0]"
              placeholder="When Intervention Was Recorded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              id="medicationInvolved"
              name="medicationInvolved"
              className="px-5 py-3 focus:outline-none bg-[#F0F0F0]"
              placeholder="Medication Involved"
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              id="yourIntervention"
              name="yourIntervention"
              className="px-5 py-3 focus:outline-none bg-[#F0F0F0]"
              placeholder="What was your Intervention"
            />
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              name="moreDetails"
              id="moreDetails"
              cols="30"
              rows="10"
              className="w-full h-36 bg-[#F0F0F0] px-5 py-2"
              placeholder="Provide more details"
            ></textarea>
          </div>
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default New;
