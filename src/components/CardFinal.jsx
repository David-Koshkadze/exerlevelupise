import React from "react";

export default function CardFinal({ title, children }) {
  return (
    <div className="final-stage-card relative bg-[#2C3234] rounded-[12px] font-november">
      <p className="font-november-bold text-sm text-center my-5">{title}</p>

      <div className="bg-[#25292B] w-full rounded-b-[12px] px-2 py-2 flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}
