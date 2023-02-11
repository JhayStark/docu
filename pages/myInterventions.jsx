import DataTable from "@/components/DataTable";
import React from "react";

const MyInterventions = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-3/5 gap-5 py-5 mx-auto ">
        <div className="flex justify-between gap-3">
          <button className="bg-[#61BAE4] text-white hover:bg-[#087bab] p-2 rounded">
            Add Intervention
          </button>
          <button className="bg-[#61BAE4] text-white hover:bg-[#087bab] p-2 rounded">
            Go Home
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center w-4/5 py-2 mx-auto ">
        <DataTable />
      </div>
    </>
  );
};

export default MyInterventions;
