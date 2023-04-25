import React from "react";

export default function CardFinalItem({icon, text}) {
  return (
    <div className="bg-[#1C1D1E] h-14 px-2 flex items-center gap-3 rounded-[10px]">
      <img src={icon} />
      <span className="text-[13px]">{text}</span>
    </div>
  );
}
