import React from "react";
import CardGray from "./CardGray";

export default function LeaderTable() {
  return (
    <div className="mb-6 h-[455px] rounded-[12px] bg-[#25292B] p-8">
      <div className="mb-5 flex items-center justify-between text-center font-november">
        <span className="flex-1 pl-2.5 text-left text-[13px] text-[#7D7D7D]">
          პოზიცია
        </span>
        <div className="flex flex-1 items-center gap-1.5 text-left text-[13px] text-[#7D7D7D]">
          <div className="h-3 w-[18px] bg-white"></div>
          <span>ვაუჩერი</span>
        </div>
        <span className="flex-1 text-[13px] text-[#7D7D7D]">პრიზი</span>
      </div>

      {/* rounded gray card */}

      <div className="card-scroll-custom max-h-[90%] overflow-y-scroll bg-transparent pr-4">
        {Array.from({ length: 20 }).map((item, idx) => (
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
  );
}
