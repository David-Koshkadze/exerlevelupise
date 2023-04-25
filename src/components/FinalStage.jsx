import React from "react";

export default function FinalStage() {
  return (
    <div className="mt-6 rounded-[16px] bg-[#2C3234] w-full mb-14">
      {/* black inner container */}
      <div className="w-full bg-[#171718] border-[#25292B] border-4 rounded-[16px] p-6">
        <h3 className="text-sm text-center font-november-bold mb-2.5 uppercase">
          გაემგზავრე THE FESTIVAL IN MALTA-ზე!
        </h3>
        <p className="text-sm text-center font-november-bold mb-6">
          The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს პოკერის
          მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
        </p>

        <div className="ticket-voucher-card mb-6 font-november text-base mx-auto bg-[#2C3234] max-w-max h-[72px] rounded-[12px] relative px-8 flex items-center justify-start">
          <span>
            15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-4">
          <CardFinal>
            <p className="font-november-bold text-sm text-center my-5">
              A კატეგორიის საგზურში შედის
            </p>

            <div className="bg-[#25292B] w-full rounded-b-[12px] px-2 py-2 flex flex-col gap-2">
              <div className="bg-[#1C1D1E] h-14 px-2 flex items-center gap-3 rounded-[10px]">
                <img src="/assets/final-item-ticket-icon.png" />
                <span className="text-[13px]">ორმხრივი ავიაბილეთი</span>
              </div>

              <div className="bg-[#1C1D1E] h-14 px-2 flex items-center gap-3 rounded-[10px]">
                <img src="/assets/final-item-event-icon.png" />
                <span className="text-[13px]">
                  The Festival in Malta -ს მეინ ივენთის ბაი-ინი
                </span>
              </div>

              <div className="bg-[#1C1D1E] h-14 px-2 flex items-center gap-3 rounded-[10px]">
                <img src="/assets/final-item-event-icon.png" />
                <span className="text-[13px]">
                  Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი
                </span>
              </div>

              <div className="bg-[#1C1D1E] h-14 px-2 flex items-center gap-3 rounded-[10px]">
                <img src="/assets/final-item-hotel-icon.png" />
                <span className="text-[13px]">
                  სასტუმრო Golden Tulip Vivaldi Hote
                </span>
              </div>

              <div className="bg-[#1C1D1E] h-14 px-2 flex items-center gap-3 rounded-[10px]">
                <img src="/assets/final-item-money-icon.png" />
                <span className="text-[13px]">€500 სახარჯი ფული</span>
              </div>
            </div>
          </CardFinal>

          <div className="final-stage-card relative bg-[#2C3234] rounded-[12px] font-november">
            <p className="font-november-bold text-sm text-center my-5">
              A კატეგორიის საგზურში შედის
            </p>

            <div className="bg-[#25292B] w-full rounded-b-[12px] px-2 py-2 flex flex-col gap-2">
              <div className="bg-[#1C1D1E] h-14 px-2 flex items-center gap-3 rounded-[10px]">
                <img src="/assets/final-item-ticket-icon.png" />
                <span className="text-[13px]">ორმხრივი ავიაბილეთი</span>
              </div>

              <div className="bg-[#1C1D1E] h-14 px-2 flex items-center gap-3 rounded-[10px]">
                <img src="/assets/final-item-event-icon.png" />
                <span className="text-[13px]">
                  The Festival in Malta -ს მეინ ივენთის ბაი-ინი
                </span>
              </div>

              <div className="bg-[#1C1D1E] h-14 px-2 flex items-center gap-3 rounded-[10px]">
                <img src="/assets/final-item-event-icon.png" />
                <span className="text-[13px]">
                  Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი
                </span>
              </div>

              <div className="bg-[#1C1D1E] h-14 px-2 flex items-center gap-3 rounded-[10px]">
                <img src="/assets/final-item-hotel-icon.png" />
                <span className="text-[13px]">
                  სასტუმრო Golden Tulip Vivaldi Hote
                </span>
              </div>

              <div className="bg-[#1C1D1E] h-14 px-2 flex items-center gap-3 rounded-[10px]">
                <img src="/assets/final-item-money-icon.png" />
                <span className="text-[13px]">€500 სახარჯი ფული</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
