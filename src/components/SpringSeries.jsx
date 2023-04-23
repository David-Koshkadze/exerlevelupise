import React from "react";

export default function SpringSeries() {
  return (
    <>
      <div className="mt-6 rounded-[16px] bg-[#2C3234] w-full mb-7">
        <div
          className="bg-[#F05A22] max-w-[250px] h-1.5 rounded-b-md mx-auto mb-4"
          style={{
            boxShadow: "0 0 10px 0 #f05a22",
          }}
        ></div>
        <h1 className="mx-auto text-center mb-5 text-[18px] font-helvetica-bold text-up">
          ტურნირები და სატელიტები
        </h1>
        {/* black inner container */}
        <div className="flex flex-col items-center w-full bg-[#171718] border-[#25292B] border-x-4 border-b-4 rounded-b-[16px] p-6 relative">
          {/* Promo Images */}
          <img
            src="/assets/promo-left-img.png"
            className="absolute left-0 bottom-0"
            alt="promo-left"
          />
          <img
            src="/assets/promo-right-img.png"
            className="absolute right-0 bottom-0"
            alt="promo-right"
          />

          <h3>სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი: </h3>
          <div className="bg-green-400 ">
            <span>19:00 / 19:30 / 20:00</span> 
          </div>
          <p>*ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან</p>
          <p>ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში</p>



        </div>
      </div>

      <div className="mt-6 rounded-[16px] bg-[#2C3234] w-full mb-14">
        <div
          className="bg-[#F05A22] max-w-[250px] h-1.5 rounded-b-md mx-auto mb-4"
          style={{
            boxShadow: "0 0 10px 0 #f05a22",
          }}
        ></div>
        <h1 className="mx-auto text-center mb-5 text-[18px] font-helvetica-bold text-up">
          მოხვდი TOP20 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით
        </h1>
        {/* black inner container */}
        <div className="flex flex-col w-full bg-[#171718] border-[#25292B] border-x-4 border-b-4 rounded-b-[16px] p-6 relative"></div>
      </div>
    </>
  );
}
