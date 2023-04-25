import React from "react";
import CardFinal from "./CardFinal";
import CardFinalItem from "./CardFinalItem";

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

        <div className="mt-6 rounded-[16px] bg-[#2C3234] w-full mb-14">
          <div
            className="bg-orange max-w-[250px] h-1.5 rounded-b-md mx-auto mb-4"
            style={{
              boxShadow: "0 0 10px 0 #f05a22",
            }}
          ></div>
          <h1 className="mx-auto text-center mb-5 text-[18px] font-helvetica-bold text-up">
            მოიგე საგზური 30 აპრილის ფინალურ ტურნირებზე
          </h1>
          {/* black inner container */}
          <div className="flex flex-col w-full bg-[#171718] border-[#25292B] border-x-4 border-b-4 rounded-b-[16px] p-6 relative">
            
          </div>
        </div>
      </div>
    </div>
  );
}
