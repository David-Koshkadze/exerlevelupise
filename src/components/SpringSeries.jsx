import React from "react";

export default function SpringSeries() {
  return (
    <>
      <div className="mt-6 rounded-[16px] bg-[#2C3234] w-full mb-7">
        <div
          className="bg-orange max-w-[250px] h-1.5 rounded-b-md mx-auto mb-4"
          style={{
            boxShadow: "0 0 10px 0 #f05a22",
          }}
        ></div>
        <h1 className="mx-auto text-center mb-5 text-[18px] font-helvetica-bold text-up">
          ტურნირები და სატელიტები
        </h1>
        {/* black inner container */}
        <div className="flex flex-col items-center w-full bg-[#171718] border-[#25292B] border-x-4 border-b-4 rounded-b-[16px] p-6 pb-3 relative">
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

          <h3 className="font-helvetica-bold text-base mb-4">
            სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:{" "}
          </h3>
          <div className="mb-4 rounded-lg border-orange border-[3px] pr-2 flex items-center gap-2">
            <div className="bg-orange rounded-r-lg">
              <img
                src="/assets/time1-svgrepo.svg"
                alt="time1"
                className="w-6 h-6"
              />
            </div>
            <span className="font-november-bold text-[13px]">
              19:00 / 19:30 / 20:00
            </span>
          </div>
          <div className="mb-4 text-sm font-november leading-7 max-w-[450px] text-center text-gray-400">
            <p>*ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან</p>
            <p>ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში</p>
          </div>

          <button className="bg-orange rounded-md px-3 py-1 font-helvetica-bold">
            პოკერის ლობი
          </button>
        </div>
      </div>

      <div className="mt-6 rounded-[16px] bg-[#2C3234] w-full mb-14">
        <div
          className="bg-orange max-w-[250px] h-1.5 rounded-b-md mx-auto mb-4"
          style={{
            boxShadow: "0 0 10px 0 #f05a22",
          }}
        ></div>
        <h1 className="mx-auto text-center mb-5 text-[18px] font-helvetica-bold text-up">
          მოხვდი TOP20 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით
        </h1>
        {/* black inner container */}
        <div className="flex flex-col w-full bg-[#171718] border-[#25292B] border-x-4 border-b-4 rounded-b-[16px] p-6 relative">
          <div className="mx-auto bg-[#202324] rounded-full pl-4 pr-12 py-2 relative flex items-center border-2 border-[#2C3234]">
            <span className="font-november-bold text-[13px]">
              ქულების დაგროვების მექანიკა
            </span>
            {/* <img src="/assets/mechanic-icon.png" className="absolute right-0" /> */}
            <div className="absolute right-0 w-10 h-10 rounded-full bg-orange border border-white grid place-items-center cursor-pointer fill-white">
              <img
                src="/assets/down-chevron.svg"
                alt="down arrow"
                className="text-white w-5 h-5"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
