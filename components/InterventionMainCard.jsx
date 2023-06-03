import Link from "next/link";
import React from "react";
import { FiFolder } from "react-icons/fi";

const InterventionMainCard = () => {
  return (
    <div className="p-4 space-y-5 text-xs leading-tight rounded-lg shadow-lg lg:p-3 text-stone-400">
      <div>
        <div className="flex items-center justify-between ">
          <div className="flex flex-row">
            <div className="w-12 h-12 bg-red-500 bg-center bg-cover rounded-full " />
            <div className="ml-3">
              <div className="p-1 text-xs font-medium text-neutral-800">
                John Appiah
              </div>
              <div className="p-1 text-xs text-neutral-500">2/12/23</div>
            </div>
          </div>
          <div>
            <Link href={`/mobile/interventions/details`}>
              <FiFolder className="text-[#0146E9]  text-2xl md:text-2xl " />
            </Link>
          </div>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </div>
    </div>
  );
};

export default InterventionMainCard;
