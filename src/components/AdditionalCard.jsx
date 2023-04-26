import React from "react";

export default function AdditionalCard() {
  return (
    <div className="bg-[#2C3234] rounded-[16px] w-full text-center px-6 md:px-[105px] pb-6 mb-14">
      <div
        className="bg-[#F05A22] max-w-[250px] h-1.5 rounded-b-md mx-auto mb-4"
        style={{
          boxShadow: "0 0 10px 0 #f05a22",
        }}
      ></div>

      <h3 className="text-up text-base md:text-[18px] font-helvetica-bold mb-3">
        დამატებით შედგება, ქეშგეიმის, ტურნირების და სპინ პოკერის 12 SIDE ლიდერბორდი
      </h3>
      <p className="font-helvetica-roman text-[12px] md:text-[15px] text-gray-400">* Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში.</p> 
    </div>
  );
}
