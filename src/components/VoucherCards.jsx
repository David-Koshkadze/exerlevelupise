import React from "react";
import VoucherCard from "./VoucherCard";

export default function VoucherCards() {
  return (
    <div className="flex w-full flex-col gap-2.5 rounded-[16px] bg-[#25292B] px-6 py-0 md:p-6">
      <VoucherCard
        icon="/assets/travel-icon-sm.png"
        text="The Festival in Malta-ს საგზური"
      />
      <VoucherCard
        icon="/assets/ticket-icon-sm.png"
        text="სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური"
      />
      <VoucherCard
        icon="/assets/gift-icon.svg"
        text="ტექნიკის მაღაზიის ვაუჩერი"
      />
    </div>
  );
}
