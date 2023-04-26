import React from "react";
import VoucherCards from "./VoucherCards";
import LeaderTable from "./LeaderTable";

export default function CashGames() {
  return (
    <div className="mb-14 mt-6 w-full rounded-[16px] bg-[#2C3234]">
      <div
        className="mx-auto mb-4 h-1.5 max-w-[250px] rounded-b-md bg-[#F05A22]"
        style={{
          boxShadow: "0 0 10px 0 #f05a22",
        }}
      ></div>
      <h1 className="text-up mx-auto mb-5 text-center font-helvetica-bold text-[18px]">
        1L რეიკი = 1 ქულას
      </h1>
      {/* black inner container */}
      <div className="w-full rounded-b-[16px] border-x-4 border-b-4 border-[#25292B] bg-[#171718] p-6">
        <p className="mx-auto mb-5 text-center font-november-bold text-base">
          ჰოლდემის TOP20 ლიდერბორდი
        </p>
        {/* -------- */}
        <LeaderTable />

        {/* Ticket and vouchers cards */}
        <VoucherCards />

        <p className="mx-auto mb-5 mt-5 text-center font-november-bold text-base">
          Top20 ლიდერბორდი ჰოლდემში
        </p>
        <LeaderTable />
      </div>
    </div>
  );
}
