import React from "react";

export default function VoucherCard({icon, text}) {
  return (
    <div className="ticket-voucher-card bg-[#202324] w-full h-[72px] rounded-[12px] relative px-8 flex gap-4 items-center justify-start">
      <img src={icon}/>
      <p className="font-helvetica-roman text-[13px] md:text-[15px]">{text}</p>
    </div>
  );
}
