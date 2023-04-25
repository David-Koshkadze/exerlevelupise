import React from "react";

export default function CardFinal({ title, children }) {
  return (
    <div className="final-stage-card relative bg-[#25292B] rounded-[12px] font-november">
      <div className="bg-[#2C3234] w-full rounded-t-[12px] py-5">
        <p className="font-november-bold text-sm text-center">{title}</p>
      </div>

      <div className="bg-transparent w-full rounded-b-[12px] px-2 py-2 flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}
