import React from "react";
import CardFinal from "./CardFinal";
import CardFinalItem from "./CardFinalItem";

export default function FinalStage() {
  return (
    <>
      <div className="mb-6 mt-6 w-full rounded-[16px] bg-[#2C3234]">
        {/* black inner container */}
        <div className="w-full rounded-[16px] border-4 border-[#25292B] bg-[#171718] p-6">
          <h3 className="mb-2.5 text-center font-november-bold text-sm uppercase">
            გაემგზავრე THE FESTIVAL IN MALTA-ზე!
          </h3>
          <p className="mb-6 text-center font-november-bold text-sm">
            The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს
            პოკერის მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
          </p>

          <div className="ticket-voucher-card relative mx-auto mb-6 flex h-[72px] max-w-max items-center justify-start rounded-[12px] bg-[#2C3234] px-8 font-november text-base">
            <span>
              15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
            </span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-4">
            <CardFinal title="A კატეგორიის საგზურში შედის">
              <CardFinalItem
                icon="/assets/final-item-ticket-icon.png"
                text="ორმხრივი ავიაბილეთი"
              />

              <CardFinalItem
                icon="/assets/final-item-event-icon.png"
                text="The Festival in Malta -ს მეინ ივენთის ბაი-ინი"
              />

              <CardFinalItem
                icon="/assets/final-item-event-icon.png"
                text="Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი"
              />

              <CardFinalItem
                icon="/assets/final-item-hotel-icon.png"
                text="სასტუმრო Golden Tulip Vivaldi Hote"
              />

              <CardFinalItem
                icon="/assets/final-item-money-icon.png"
                text="€500 სახარჯი ფული"
              />
            </CardFinal>

            <CardFinal title="A კატეგორიის საგზურში შედის">
              <CardFinalItem
                icon="/assets/final-item-ticket-icon.png"
                text="ორმხრივი ავიაბილეთი"
              />

              <CardFinalItem
                icon="/assets/final-item-event-icon.png"
                text="The Festival in Malta -ს მეინ ივენთის ბაი-ინი"
              />

              <CardFinalItem
                icon="/assets/final-item-event-icon.png"
                text="Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი"
              />

              <CardFinalItem
                icon="/assets/final-item-hotel-icon.png"
                text="სასტუმრო Golden Tulip Vivaldi Hote"
              />

              <CardFinalItem
                icon="/assets/final-item-money-icon.png"
                text="€500 სახარჯი ფული"
              />
            </CardFinal>

            <CardFinal title="A კატეგორიის საგზურში შედის">
              <CardFinalItem
                icon="/assets/final-item-ticket-icon.png"
                text="ორმხრივი ავიაბილეთი"
              />

              <CardFinalItem
                icon="/assets/final-item-event-icon.png"
                text="The Festival in Malta -ს მეინ ივენთის ბაი-ინი"
              />

              <CardFinalItem
                icon="/assets/final-item-event-icon.png"
                text="Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი"
              />

              <CardFinalItem
                icon="/assets/final-item-money-icon.png"
                text="€500 სახარჯი ფული"
              />
            </CardFinal>
          </div>
        </div>
      </div>
      <div className="mb-14 mt-2 w-full rounded-[16px] bg-[#2C3234]">
        <div
          className="mx-auto mb-4 h-1.5 max-w-[250px] rounded-b-md bg-orange"
          style={{
            boxShadow: "0 0 10px 0 #f05a22",
          }}
        ></div>
        <h1 className="text-up mx-auto mb-5 text-center font-helvetica-bold text-[18px]">
          მოიგე საგზური 30 აპრილის ფინალურ ტურნირებზე
        </h1>
        {/* black inner container */}
        <div className="relative flex w-full flex-col rounded-b-[16px] border-x-4 border-b-4 border-[#25292B] bg-[#171718] p-6">
          {/* Grid Component */}
          <div className="grid-container-area h-[330px]">
            <div
              id="item-0"
              className="relative flex flex-col justify-center rounded-[12px] bg-[#1E2122] px-7"
            >
              <img
                src="/assets/poker-item-1-ticket-icon.png"
                className="absolute right-4 top-0"
              />
              <p className="font-november-bold text-base">
                “Cashgame Highrollers” -
              </p>
              <span className="text-left font-november text-sm text-gray-300">
                1 საგზური
              </span>
            </div>

            <div
              id="item-1"
              className="relative flex flex-col justify-center rounded-[12px] bg-[#1E2122] px-7"
            >
              <img
                src="/assets/poker-item-1-ticket-icon.png"
                className="absolute right-4 top-0"
              />
              <p className="font-november-bold text-base">
                „Cashgame Grinders”
              </p>
              <span className="text-left font-november text-sm text-gray-300">
                1 საგზური
              </span>
            </div>

            <div
              id="item-2"
              className="relative flex flex-col justify-center rounded-[12px] bg-[#1E2122] px-7"
            >
              <img
                src="/assets/poker-item-1-ticket-icon.png"
                className="absolute right-4 top-0"
              />
              <p className="font-november-bold text-base">
                „Cashgame Grinders”
              </p>
              <span className="text-left font-november text-sm text-gray-300">
                1 საგზური
              </span>
            </div>

            <div
              id="item-3"
              className="relative flex flex-col justify-center rounded-[12px] bg-[#1E2122] px-7 pb-2 pt-4"
            >
              <img
                src="/assets/poker-item-1-ticket-icon.png"
                className="absolute right-4 top-0"
              />
              <p className="font-november-bold text-base">
                „The Festival in Malta, GTD“
              </p>
              <span className="mb-1 text-left font-november text-sm text-gray-300">
                A კატეგორიის 1 საგზური
              </span>
              <span className="mb-1 text-left font-november text-sm text-gray-300">
                B კატეგორიის 1 საგზური
              </span>
              <span className="mb-1 text-left font-november text-sm text-gray-300">
                ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
                ბაი-ინის გადახდით.
              </span>
            </div>

            <div
              id="item-4"
              className="relative flex flex-col justify-center rounded-[12px] bg-[#1E2122] px-7"
            >
              <img
                src="/assets/poker-item-1-ticket-icon.png"
                className="absolute right-4 top-0"
              />
              <p className="font-november-bold text-base">
                „The Lord of the Rings“
              </p>
              <span className="text-left font-november text-sm text-gray-300 mb-2">
                C კატეგორიის 1 საგზური
              </span>
              <span className="text-left font-november text-sm text-gray-300">
                ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾
                ბაი-ინის გადახდით.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
