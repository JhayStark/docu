import React from "react";

const InterventionCard = () => {
  return (
    <div className="p-2 space-y-5 text-xs leading-tight border-2 rounded-lg shadow-lg lg:p-3 text-stone-400">
      <div>
        <div className="flex items-center">
          <div className="flex-shrink-0 w-12 h-12 bg-red-500 bg-center bg-cover rounded-full" />
          <div className="ml-3">
            <div className="p-1 text-xs font-medium text-neutral-800">
              John Appiah
            </div>
            <div className="p-1 text-xs text-neutral-500">2/12/23</div>
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

export default InterventionCard;
