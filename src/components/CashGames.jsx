import React from "react";
import VoucherCard from "./VoucherCard";
import CardGray from "./CardGray";

export default function CashGames() {
  return (
    <div className="mt-6 rounded-[16px] bg-[#2C3234] w-full mb-14">
      <div
        className="bg-[#F05A22] max-w-[250px] h-1.5 rounded-b-md mx-auto mb-4"
        style={{
          boxShadow: "0 0 10px 0 #f05a22",
        }}
      ></div>
      <h1 className="mx-auto text-center mb-5 text-[18px] font-helvetica-bold text-up">
        1L რეიკი = 1 ქულას
      </h1>
      {/* black inner container */}
      <div className="w-full bg-[#171718] border-[#25292B] border-x-4 border-b-4 rounded-b-[16px] p-6">
        <p className="text-base text-center mx-auto mb-5 font-november-bold">
          ჰოლდემის TOP20 ლიდერბორდი
        </p>
        {/* -------- */}
        <div className="bg-[#25292B] rounded-[12px] p-8 h-[455px] mb-6">
          <div className="text-center flex items-center justify-between font-november mb-5">
            <span className="pl-2.5 text-left flex-1 text-[13px] text-[#7D7D7D]">
              პოზიცია
            </span>
            <div className="text-left flex-1 text-[13px] text-[#7D7D7D] flex gap-1.5 items-center">
              <div className="bg-white w-[18px] h-3"></div>
              <span>ვაუჩერი</span>
            </div>
            <span className="flex-1 text-[13px] text-[#7D7D7D]">პრიზი</span>
          </div>

          {/* rounded gray card */}

          <div className="border bg-transparent overflow-y-scroll card-scroll-custom max-h-[90%] pr-4">
            {Array.from({ length: 10 }).map((item, idx) => (
              <CardGray
                key={idx}
                id={idx}
                position={idx + 1}
                voucher={"1500L"}
                prize={"კატეგორიული პრიზი"}
              />
            ))}
          </div>
        </div>

        {/* Ticket and vouchers cards */}
        <div className="w-full bg-[#25292B] rounded-[16px] p-6 flex flex-col gap-2.5">
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
      </div>
    </div>
  );
}
