import InterventionMainCard from "@/components/InterventionMainCard";
import MobileNavbar from "@/components/MobileNavbar";
import AddIntervention from "@/public/svgs/AddInterventionIcon";
import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <div className="font-sans">
      <div
        id="pageContainer"
        className="flex flex-col gap-5 p-3 pt-11 lg:px-48 "
      >
        <Link href={"/mobile/interventions/new"}>
          <div className="flex flex-row md:text-2xl items-center gap-2 text-[#0146E9] self-end ">
            <AddIntervention />
            <p>Add Intervention</p>
          </div>
        </Link>
        <div className="grid grid-cols-1 py-5 md:grid-cols-2">
          <InterventionMainCard />
          <InterventionMainCard />
          <InterventionMainCard />
          <InterventionMainCard />
          <InterventionMainCard />
          <InterventionMainCard />
          <InterventionMainCard />
          <InterventionMainCard />
        </div>
      </div>

      <MobileNavbar />
    </div>
  );
};

export default Index;
