import React from "react";

export default function CardGray({ position, voucher, prize }) {
  return (
    <div className="bg-[#1E2122] rounded-full border-2 border-[#2C3234] h-[56px] flex items-center justify-between pl-5 pr-9 mb-0.5">
      <div
        className="rounded-full w-7 h-7 bg-[#2C3234] flex items-center justify-center"
        style={{
          boxShadow: "0 0 5px #2C3234",
        }}
      >
        <span className="text-[15px]">{position}</span>
      </div>
      <span>{voucher}</span>
      <div>
        <span>icon </span>
        <span className="text-[13px]">{prize}</span>
      </div>
    </div>
  );
}
